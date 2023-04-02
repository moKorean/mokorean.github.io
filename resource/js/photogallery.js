/**
* CSCI 1170 - Winter23
* @author: Geunwon Mo (B00954162)
*/

//get gallery items
const galleryItems = document.querySelectorAll('.galleryItem');

let lastClickedNodesParent; //storage for last clicked object's parent
let isModal = false;  //modal is opened

galleryItems.forEach(element => {

  if (element.parentNode.tagName == 'A'){ //Conditional
    //if parent node is <a>. remove default event //do not use href="big image"
    element.parentNode.addEventListener('click', (event) => {
      event.preventDefault();
    })
  }
  
  element.addEventListener('click', () => {
    if (isModal) return;

    // Create a modal popup and a full-sized image element
    const modal = document.createElement('div');
    modal.classList.add('backgroundBlocker');

    if (element.tagName == 'IMG'){  //img click
      let fullImage = document.createElement('img');
      fullImage.classList.add('fullSizeImage');
      fullImage.src = element.src.replace('/thumbs/', '/pics/');  //show fullsize img using change directory.
      fullImage.alt = element.alt;
      
      modal.appendChild(fullImage);
    } else if (element.tagName == 'VIDEO'){ //when video is element, bring video element to modal.
      lastClickedNodesParent = element.parentNode;  //store parent node to restore
     
      //now playing image for placeholder
      const nowplayingImg = document.createElement('img');
      nowplayingImg.classList.add('galleryItem');
      nowplayingImg.id = 'nowplay';
      nowplayingImg.src = 'resource/images/nowplaying.png';
      lastClickedNodesParent.appendChild(nowplayingImg);

      //change size
      element.classList.remove('galleryItem');
      element.classList.add('fullSizeImage');
      
      modal.appendChild(element);
    }

    //show modal
    document.body.appendChild(modal);
    isModal = true;

    //close modal function
    modal.addEventListener('click', () => { //remove modal popup
      if (!isModal) return;

      if (element.tagName == 'VIDEO'){  //return video to the gallery
        let originElement = modal.firstChild;
        originElement.classList.remove('fullSizeImage');
        originElement.classList.add('galleryItem');

        lastClickedNodesParent.removeChild(lastClickedNodesParent.querySelector('img'));  //remove now playing image
        element.pause();  //video stop
        element.currentTime = 0;  //video time set to first
        lastClickedNodesParent.appendChild(modal.firstChild);
      }

      document.body.removeChild(modal);
      isModal = false;
    });
  });
  
});