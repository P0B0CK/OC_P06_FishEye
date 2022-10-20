export function videosFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    
    function getVideoDOM() {
        const mediaVidCard = document.createElement('article');
        mediaVidCard.setAttribute('class' , 'media-card');
        mediaVidCard.innerHTML =`
            <div class="mediaEvent mediaContent" onclick="openLightbox()">
                <video width="350" height="300" controls>
                <source src="assets/photographers/${photographerId}/${video}"" type=video/mp4>
                ERROR to load file
                </video>
            </div>
            <div class="card-legend">
                <h4 class="cardTitle">${title}</h4>
                <p class="cardNbrLikes">${likes}</p><i class="fa-sharp fa-solid fa-heart"></i>
            </div>`;
        
        return mediaVidCard;
    }

    return {getVideoDOM};
}