
/**
 * 
 * @param {*} data 
 * @returns 
 */

export function mediasFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    
    function imageFactory() {
        const mediaPictCard = document.createElement('article');
        mediaPictCard.setAttribute('class' , 'media-card');
        mediaPictCard.innerHTML =`
        <img src="assets/photographers/${photographerId}/${image}"/>
        <div class="card-legendary">
        <h4 class="cardTitle">${title}</h4>
        <p class="cardNbrLikes">${likes}</p><i class="fa-sharp fa-solid fa-heart"></i>
        </div>`;
        
        return mediaPictCard;
    }
    
    function videoFactory() {
        const mediaVidCard = document.createElement('article');
        mediaVidCard.setAttribute('class' , 'media-card');
        mediaVidCard.innerHTML =`
        <video width="350" height="300" controls>
        <source src="assets/photographers/${photographerId}/${video}"" type=video/mp4>
        ERROR to load file
        </video>
        <div class="card-legendary">
        <h4 class="cardTitle">${title}</h4>
        <p class="cardNbrLikes">${likes}</p><i class="fa-sharp fa-solid fa-heart"></i>
        </div>`;
        
        return mediaVidCard;
    }
    
    function getUserMediasDOM(){
        const mediaSection = document.querySelector(".media-section");
        const mediaFormat = data.image ? mediaSection.appendChild(imageFactory()) : mediaSection.appendChild(videoFactory());
        
        return mediaFormat;
    };
    
    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM, videoFactory, imageFactory};
};