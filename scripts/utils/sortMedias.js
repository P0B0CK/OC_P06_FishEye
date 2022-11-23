import { displayMedias, getMediaUserInfos, getPhotographerUserInfos } from "../pages/photographer.js";

displayMedias;
getMediaUserInfos;
getPhotographerUserInfos;

console.log('fonction sortMedia ici')

const selectbox = document.getElementById('selected-filter');



// écouteur au changement d'état :
selectbox.addEventListener('change', (e) => {
    const optionValue = selectbox.value;
    const mediasAllSection = document.querySelector('.media-section');


    // const array1 = [1, 30, 4, 21, 100000];
    // console.log(array1)

    if (optionValue == 'popularity') {
        console.log('=> Order by popularity <=');
        // mediasAllSection.classList.add('hidden-media');
        console.log(media);
        
        media.sort((a, b) => {
            const x = a.likes;
            const y = b.likes;
            if (x < y) {
              return -1
            } if (x > y) {
              return 1
            } else { 
                return 0 }
          });

        // array1.sort((a, b) => b - a); // ordre décroissant
        // array1.sort((a, b) => a - b); // ordre croissant
        // console.log(array1)
    } else if (optionValue == 'date') {
       console.log('=> Order by date <=');
    } else if (optionValue == 'title') {
       console.log('=> Order by title <=');
    } else {
        return console.log('== SORT issue ==');
    }
})