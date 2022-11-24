console.log('fonction sortMedia ici')

const selectbox = document.getElementById('selected-filter');

export async function sortMedia(data) {

  const optionValue = selectbox.value;
  const mediasArray = data; // tableau des medias
  
  console.log(mediasArray);
  
    if (optionValue == 'popularity') {
        console.log('=> Order by popularity <=');
  
      mediasArray.sort((a, b) => b.likes - a.likes); // Du plus aimé au moins aimé
      console.log(mediasArray)

    } else if (optionValue == 'date') {
      console.log('=> Order by date <=');
  
      mediasArray.sort((a, b) => b.date - a.date); // Du plus récent au plus ancien
      console.log(mediasArray)
    } else if (optionValue == 'title') {
      console.log('=> Order by title <=');
  
      mediasArray.sort((a, b) => a.title < b.title?-1:1); // Par ordre alphabétique croissant
      console.log(mediasArray);
    } else {
      return console.log('== SORT issue ==');
    }
};


// // écouteur au changement d'état :
// selectbox.addEventListener('change', (e) => {
//   const optionValue = selectbox.value;
//   const mediasArray = [1, 15, 9, 59, 11];

//   console.log(displayMedias)
//   // const mediasAllSection = document.querySelector('.media-section');
    
//   // const array1 = [1, 33, 4, 21, 251];
//   // console.log(array1)
//   // array1.sort((a, b) => b - a); // ordre décroissant
//   // array1.sort((a, b) => a - b); // ordre croissant
//   // console.log(array1)
  
  
//     if (optionValue == 'popularity') {
//         console.log('=> Order by popularity <=');
  
//       mediasArray.sort((a, b) => b.likes - a.likes); // Du plus aimé au moins aimé
//       console.log(mediasArray)
//       // FONCTION TEST ALGO
//       // array1.sort((a, b) => {
//       //   const x = a;
//       //   const y = b;
            
//       //   return x - y; 
//       // });
//       // SIMPLIFICATION ::
//       // array1.sort((a, b) => a - b);
//       // console.log("Mon tableau croissant : " + array1);
  
//     } else if (optionValue == 'date') {
//       console.log('=> Order by date <=');
  
//       mediasArray.sort((a, b) => b.date - a.date); // Du plus récent au plus ancien
//       console.log(mediasArray)
        
//       // FONCTION TEST ALGO
//       //  array1.sort((a, b) => {
//       //   const x = a;
//       //   const y = b;
          
//       //   return y - x; 
//       // });
//       // console.log("Mon tableau décroissant : " + array1);
  
//     } else if (optionValue == 'title') {
//       console.log('=> Order by title <=');
  
//       mediasArray.sort((a, b) => a.title - b.title); // Par ordre alphabétique croissant
//       console.log(mediasArray);
//     } else {
//       return console.log('== SORT issue ==');
//     }
// });
