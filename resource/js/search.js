/**
* CSCI 1170 - Winter23
* @author: Geunwon Mo (B00954162)
*/

//constants
const searchButton = document.getElementById('searchBtn');
const searchText = document.getElementById('searchText');

//add event
searchButton.addEventListener("click", searchInPage);

/*
* Search text in current page
* Limitation: find text in innerHTML, so tag itself's content might be found, if try to find tagname, it will occur bug., e.g. div
*/
function searchInPage() {
    let text = searchText.value.trim();
    let cnt = 0;    //found count

    if (text == ''){    //empty validation
        alert('The input is empty. Please enter some text.');
        searchText.focus();
        return;
    }

    removeHilighted();  //remove exist highlights

    let regex = new RegExp(escapeRegExp(text), 'gi');   //global, case-insentive

    let allTextElements = document.querySelectorAll('main > *');    //find under main tag, contents
    allTextElements.forEach(element => {    //looping
        if (element.innerHTML.indexOf(text) > -1){  //if found text
            element.innerHTML = element.innerHTML.replace(regex,
                function (match) {
                    cnt++;
                    return `<span class="highlight">${match}</span>`;   //replace text to surrounding highlighted span tag
                });
        }
    });
    
    if (cnt == 0) alert(`Not found : ${searchText.value.trim()}`);   //if not found, notification
    else{
        // alert(`Found ${cnt} '${searchText.value.trim()}'(s)`);
        document.querySelector('.highlight').scrollIntoView();  //scroll to first searched one
    }
}

/*
*   remove all highlighted span tags
*/
function removeHilighted(){
    let highlights = document.querySelectorAll('span.highlight');
    //[8]Amin Jafari. 2017. javascript - Need help changing appendChild to replaceChild. Stack Overflow. Retrieved April 1, 2023 from https://stackoverflow.com/a/45787231
    highlights.forEach(highlight => {
      let parent = highlight.parentNode;
      let text = document.createTextNode(highlight.textContent);
      parent = parent.replaceChild(text, highlight);
    });
}

//escape text
//[7]coolaj86. 2011. Escape string for use in Javascript regex. Stack Overflow. Retrieved April 1, 2023 from https://stackoverflow.com/a/6969486
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}