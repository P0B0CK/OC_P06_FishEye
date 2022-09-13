/**
 * 
 * @param {*} data 
 * @returns 
 */

export function mediasFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;



    function getUserMediasDOM(){
        // Div principale contenant la gallery ::
        const photographGallery = document.createElement('div');
        photographGallery.setAttribute('id', 'photograph-gallery');
        // Div secondaire contenant le filtre ::
        const galleryFilter = document.createElement('div');
        galleryFilter.setAttribute('id', 'gallery-filter');
        // Div secondaire contenant les médias ::
        const galleryMedias = document.createElement('div');
        galleryMedias.setAttribute('id', 'gallery-medias');

        
        photographGallery.appendChild(galleryFilter);
        galleryFilter.innerHTML = `
            <label for="medias-filter">Trier par </label>
                <select name="medias-select" id="medias-filter">
                    <option value="popu">Popularité</option>
                    <option value="date">Date</option>
                    <option value="titre">Titre</option>
                </select>`;
        

        
        photographGallery.appendChild(galleryMedias);

        const mediaCard = document.createElement('div');
            mediaCard.setAttribute('class' , 'mediaCard');
        
        // Ouverture du LIGHTBOX
        const cardLink = document.createElement('a');
            cardLink.setAttribute('href' , '')
        
        cardLink.appendChild(mediaCard);
        galleryMedias.appendChild(cardLink);

        const mediaPicture = document.createElement('img');
        mediaPicture.setAttribute('src' , `../../asset/photographers/${photographerId}/${id}`);
        mediaCard.appendChild(mediaPicture);

        const mediaInfos = document.createElement('div');
        mediaInfos.setAttribute('class' , 'mediaInfos');
        mediaCard.appendChild(mediaInfos);
        const mediaTitle = document.createElement('p');
        mediaTitle.setAttribute('class' , 'card-title');
        mediaTitle.innerHTML = `${title}`;
        const mediaLikes = document.createElement('p');
        mediaLikes.setAttribute('class' , 'card-likes');
        mediaLikes.innerHTML = `${likes}`;
        mediaInfos.appendChild(mediaTitle);
        mediaInfos.appendChild(mediaLikes);


/*        
        function mediaCard() {
            // CARD MEDIA :: 
            // PICTURE/VIDEO + TITLE + LIKES
            const mediaCard = document.createElement('div');
            mediaCard.setAttribute('class' , 'mediaCard');
            
                // CARD PICTURE ::
                // Doit être un lien contenant une image
                const linkMedia = document.createElement('a');
                    linkMedia.setAttribute('href', `../../photographer.html?id=${id}?media=${id}`);
                linkMedia.appendChild(mediaCard);

                const cardPict = document.createElement('div');
                    cardPict.setAttribute('class' ,  'picture-ctn');


                // CARD LEGEND ::  
                // media title + number of likes
                const cardLegend = document.createElement('div');
                    cardLegend.setAttribute('class' , 'title-card');
                        
                        const mediaTitle = document.createElement('div');
                            cardLegend.setAttribute('class' , 'media-title');
                    
                        const nbrLikes = document.createElement('div');
                            cardLegend.setAttribute('class' , 'nbrLikes');
                    
                    mediaTitle.textContent = title;
                    nbrLikes.textContent = likes;
            
                cardLegend.appendChild(mediaTitle);
                cardLegend.appendChild(nbrLikes);

            // MEDIA CARD ::
            // Affiliation des enfants de mediaCard
            mediaCard.appendChild(cardPict);            
            mediaCard.appendChild(cardLegend);

            return mediaCard;
        };
*/
        
        return photographGallery;
    };

    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM };
};