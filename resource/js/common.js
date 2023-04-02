/**
* CSCI 1170 - Winter23
* @author: Geunwon Mo (B00954162)
*/

const colour1 = document.getElementById('colour1');
const colour2 = document.getElementById('colour2');
const colour3 = document.getElementById('colour3');

colour1.addEventListener("click",  (event) => {event.preventDefault(); changeColor(1, colour1)});  //prevent executing <a> tag's default action
colour2.addEventListener("click",  (event) => {event.preventDefault(); changeColor(2, colour2)});
colour3.addEventListener("click",  (event) => {event.preventDefault(); changeColor(3, colour3)});

function changeColor(colour, clickedElement){

  const headerName = document.getElementById('headerNameArea');
  const headerNav = document.getElementById('headerNavArea');
  const footer = document.querySelector('footer');
  
  //defines new color
  let lightColorScheme = "lightColorScheme" + clickedElement.getAttribute('kind') + colour;
  let colorScheme = "colorScheme" + clickedElement.getAttribute('kind') + colour;

  //selector's selection mark move
  document.querySelectorAll('[id^="colour"]').forEach(existColorSelectors => { existColorSelectors.classList.remove('selected'); });
  clickedElement.classList.add('selected');

  //change color
  headerName.classList.remove(headerName.classList.value);
  headerNav.classList.remove(headerNav.classList.value);
  footer.classList.remove(footer.classList.value);

  headerName.classList.add(lightColorScheme);
  headerNav.classList.add(colorScheme);
  footer.classList.add(colorScheme);
  
  //for index page's color lines
  document.querySelectorAll('#skills tr:first-child > td:first-child').forEach(
      element => {
        element.style.backgroundColor = window.getComputedStyle(headerNav).backgroundColor;
      }
  );

}

//for splash image, reduce body window when just index.html
document.querySelectorAll('.indexMain').forEach( el => {
  //if indexMain class detected, it is index.html
  console.log('index html!');
  el.style.height = el.style.height - 200;
  var body = document.body,
    html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

});