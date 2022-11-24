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
  
  // const array1 = [1, 33, 4, 21, 251];
  // console.log(array1)
  // array1.sort((a, b) => b - a); // ordre décroissant
  // array1.sort((a, b) => a - b); // ordre croissant
  // console.log(array1)


    if (optionValue == 'popularity') {
        console.log('=> Order by popularity <=');

      mediasArray.sort((a, b) => a.likes - b.likes);
      console.log(mediasArray)
      // FONCTION TEST ALGO
      // array1.sort((a, b) => {
      //   const x = a;
      //   const y = b;
          
      //   return x - y; 
      // });
      // SIMPLIFICATION ::
      // array1.sort((a, b) => a - b);
      // console.log("Mon tableau croissant : " + array1);

    } else if (optionValue == 'date') {
      console.log('=> Order by date <=');

      mediasArray.sort((a, b) => a.date - b.date);
      console.log(mediasArray)
      
      // FONCTION TEST ALGO
      //  array1.sort((a, b) => {
      //   const x = a;
      //   const y = b;
        
      //   return y - x; 
      // });
      // console.log("Mon tableau décroissant : " + array1);

    } else if (optionValue == 'title') {
       console.log('=> Order by title <=');
       
       mediasArray.sort((a, b) => a.title - b.title);
       console.log(mediasArray);
    } else {
        return console.log('== SORT issue ==');
    }
})