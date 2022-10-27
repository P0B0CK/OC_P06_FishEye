import { lightbox } from "../utils/modalLightbox.js";
import { imagesFactory } from "./image.js";
import { videosFactory } from "./video.js";

/**
 * 
 * @param {*} data 
 * @returns 
 */

export function mediasFactory(data, media, index) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    function getUserMediasDOM(){
    
        const mediaImage = imagesFactory(data);
        const mediaVideo = videosFactory(data);
        const mediaContent = data.image ? mediaImage.getImageDOM() : mediaVideo.getVideoDOM();
        // Create media container :
        const mediaContainer = document.createElement('div');
        mediaContainer.setAttribute('class', 'mediaEvent mediaContent');
        mediaContainer.innerHTML= mediaContent;
        
        mediaContainer.addEventListener('click', () => {
        // Lightbox :
        const lb = lightbox(media, index);
        lb.openLightbox();
          });
          
        // Create legend container :
        const mediaLegend = document.createElement('div');
        mediaLegend.setAttribute('class', 'card-legend');
        
        // mediaLegend.innerHTML = `<h4 class="cardTitle">${title}</h4>
        const mediaTitle = document.createElement('h4');
        mediaTitle.setAttribute('class', 'cardTitle');
        mediaTitle.innerHTML = `${title}`;
        mediaLegend.appendChild(mediaTitle);
        
        // <p class="cardNbrLikes">${likes}</p><i class="fa-sharp fa-solid fa-heart"></i>`;
        const mediaNbrLikes = document.createElement('p');
        mediaNbrLikes.setAttribute('class', 'cardNbrLikes');
        mediaNbrLikes.innerHTML = `${likes}` + `<i class="fa-sharp fa-solid fa-heart"></i>`;
        mediaLegend.appendChild(mediaNbrLikes);

        const mediaArticle = document.createElement('article');
        mediaArticle.setAttribute('class', 'media-card');
        mediaArticle.appendChild(mediaContainer);
        mediaArticle.appendChild(mediaLegend);

    //  <div class="mediaEvent mediaContent" onclick="openLightbox()">
    //      <img src="assets/photographers/${photographerId}/${image}"/>
    //  </div>

        return mediaArticle;
    };
    
    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM};
};