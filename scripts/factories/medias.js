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
        
        /**
         * @param {EventListener} click on media card to display LB   
         */
        mediaContainer.addEventListener('click', () => {
        // Open Lightbox :
        const lb = lightbox(media, index);
        lb.openLightbox();
        });
          
        // Create legend container :
        const mediaLegend = document.createElement('div');
        mediaLegend.setAttribute('class', 'media-legend');
        
        // Create legend title
        const mediaTitle = document.createElement('h4');
        mediaTitle.setAttribute('class', 'media-title');
        mediaTitle.innerHTML = `${title}`;
        mediaLegend.appendChild(mediaTitle);
        

        // Create legend number of likes
        const mediaNbrLikes = document.createElement('p'); // !!! changer pour SPAN ou DIV
        mediaNbrLikes.setAttribute('class', 'cardNbrLikes');
        mediaNbrLikes.dataset.liked = "true";
        mediaNbrLikes.innerHTML = `<span class="likes-count">${likes}</span><i class="fa-sharp fa-solid fa-heart"></i>`;
        mediaNbrLikes.addEventListener('click', () => {
            if (mediaNbrLikes.dataset.liked == "true") {
                mediaNbrLikes.querySelector('.likes-count').innerHTML--;
                mediaNbrLikes.dataset.liked = "false";
                mediaNbrLikes.querySelector('i').classList.replace('fa-solid', 'fa-regular');
            } else {
                mediaNbrLikes.querySelector('.likes-count').innerHTML++;
                mediaNbrLikes.dataset.liked = "true";
                mediaNbrLikes.querySelector('i').classList.replace('fa-regular', 'fa-solid');
            }  
        });
        mediaLegend.appendChild(mediaNbrLikes);


        const mediaArticle = document.createElement('article');
        mediaArticle.setAttribute('class', 'media-card');
        mediaArticle.appendChild(mediaContainer);
        mediaArticle.appendChild(mediaLegend);

        return mediaArticle;
    };
    
    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM};
};