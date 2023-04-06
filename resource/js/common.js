/**
* CSCI 1170 - Winter23
* @author: Geunwon Mo (B00954162)
*/

//Event Handler
const headNameArea = document.querySelector('.headNameArea');
headNameArea.addEventListener('click', (event) => {
  document.location = 'index.html';
})

const colour1 = document.getElementById('colour1');
const colour2 = document.getElementById('colour2');
const colour3 = document.getElementById('colour3');

//Event Handler
colour1.addEventListener("click",  (event) => {event.preventDefault(); changeColor(1, colour1)});  //prevent executing <a> tag's default action
colour2.addEventListener("click",  (event) => {event.preventDefault(); changeColor(2, colour2)});
colour3.addEventListener("click",  (event) => {event.preventDefault(); changeColor(3, colour3)});

let darkmodeClass = null; //to store this page's darkmode color class

//if queryString 'colour' setted
let pageSettedColor = getParameterByName('colour');
if (pageSettedColor == 1 || pageSettedColor == 2 || pageSettedColor == 3) changeColorBySet(parseInt(pageSettedColor));
else changeColorBySet(1); //default colour = 1
function changeColorBySet(colorValue){
  changeColor(colorValue, document.getElementById('colour'+colorValue));
}

/*
* ColourChanger
*/
function changeColor(colour, clickedElement){

  const headerName = document.getElementById('headerNameArea');
  const headerNav = document.getElementById('headerNavArea');
  const footer = document.querySelector('footer');
  
  //elements selector query for darkmode
  const darkElementQuery = 'body, #headerNameArea > h1, #headerNameArea > p, #contactBar';

  let darkmode = (toDark, backgroundColorClass) => {
      console.log(`to dark mode? ${toDark}`);
      if (toDark){

        darkmodeClass = backgroundColorClass;
        //convert to dark mode
        document.querySelectorAll('.topShortcuts img').forEach(icon => {
          let newSrc = icon.src;
          if (newSrc.indexOf('_dark.png') < 0){
            newSrc = newSrc.replace('.png', '_dark.png');
          }
          icon.src = newSrc;
        });

        document.querySelectorAll(darkElementQuery).forEach(el => {
          el.classList.add(darkmodeClass);
          el.classList.add('darkMode');
        });

      } else {
        //convert to normal mode
        document.querySelectorAll('.topShortcuts img').forEach(icon => {
          icon.src = icon.src.replace('_dark.png', '.png');
        });

        document.querySelectorAll(darkElementQuery).forEach(el => {
          el.classList.remove(darkmodeClass);
          el.classList.remove('darkMode');
        });
      }
  }
  
  //defines new color
  let lightColorScheme = "lightColorScheme" + clickedElement.getAttribute('kind') + colour;
  let colorScheme = "colorScheme" + clickedElement.getAttribute('kind') + colour;

  //selector's selection mark move
  document.querySelectorAll('[id^="colour"]').forEach(existColorSelectors => {
    existColorSelectors.classList.remove('selected'); 
  });
  clickedElement.classList.add('selected');

  //change color
  headerName.classList.remove(headerName.classList.value);
  headerNav.classList.remove(headerNav.classList.value);
  footer.classList.remove(footer.classList.value);

  headerName.classList.add(lightColorScheme);
  headerNav.classList.add(colorScheme);
  footer.classList.add(colorScheme);

  //darkmode
  if (colour === 3){
    darkmode(true, lightColorScheme);
  } else {
    //normal mode
    darkmode(false, lightColorScheme);
  }
  
  //for index page's color lines
  document.querySelectorAll('#skills tr:first-child > td:first-child').forEach(
      element => {
        element.style.backgroundColor = window.getComputedStyle(headerNav).backgroundColor;
      }
  );

  //for work page's table
  document.querySelectorAll('[class^="tableColor"]').forEach(
    element => {
      
      const classes = element.classList;
      //remove old color
      for (let z = 1; z <= 2; z++){
        for (let i = 0; i < classes.length; i++) {
          if (classes[i].startsWith('tableColor'+z)) {
            element.classList.remove(classes[i]);
            element.classList.add('tableColor'+z+'_'+colour);
          }
        }
      }
      
    }
);

  

  //add query strings for nav Items
  document.querySelectorAll('.navI').forEach(item => {
    let url = new URL(item.href); //make new url obj
    url.searchParams.set('colour', colour); //set query string
    item.href = url.href; //replace url with query string
  });

}

//to get queryString by javascript
//[12]How can I get query string values in JavaScript? Stack Overflow. Retrieved from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}