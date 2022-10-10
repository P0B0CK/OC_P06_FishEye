export function imagesFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    
    function getImageDOM() {
        const mediaPictCard = document.createElement('article');
        mediaPictCard.setAttribute('class' , 'media-card');
        mediaPictCard.innerHTML =`
        <img src="assets/photographers/${photographerId}/${image}"/>
        <div class="card-legend">
        <h4 class="cardTitle">${title}</h4>
        <p class="cardNbrLikes">${likes}</p><i class="fa-sharp fa-solid fa-heart"></i>
        </div>`;
        
        return mediaPictCard;
    }

    return {getImageDOM};
}