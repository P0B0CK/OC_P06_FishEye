/**
 * 
 * @param {*} data 
 * @returns 
 */

export function mediasFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;



    function getUserMediasDOM(){
        // MAIN SECTION ::
        const photographGallery = document.createElement('section');
        photographGallery.setAttribute('id', 'photograph-gallery');
        
            // IN MAIN SECTION
            // TITLE
            const galleryFilter = document.createElement('h4');
            galleryFilter.setAttribute('id', 'gallery-filter');
            // FILTER SELECT-BOX :
            photographGallery.appendChild(galleryFilter);
            galleryFilter.innerHTML = `
                <label for="medias-filter">Trier par </label>
                    <select name="medias-select" id="medias-filter">
                        <option value="popu">Popularité</option>
                        <option value="date">Date</option>
                        <option value="titre">Titre</option>
                    </select>`;
        
            // DIV GALLERY ::
            const galleryMedias = document.createElement('div');
            galleryMedias.setAttribute('id', 'gallery-medias');
            photographGallery.appendChild(galleryMedias);

            // ARTICLE MEDIACARD ::
            //getPhotographerUserInfos
            // const mediaIdPhotographer = medias.map(media => media.photographerId)
            //const mediaOwner = media.filter(){return media.${photographerId}}
            // for ( let i = medias.length; i >= 0; i++){
            //     const mediaCard = document.createElement('article');
            //     mediaCard.setAttribute('class' , 'mediaCard');

            //     if(medias[i].id = i++){

            //     }
            //     return mediaCard;
            // };


        // MEDIA PHOTOGRAPHY ::
        // const mediaPhoto = `<img src="../../asset/photographers/${photographerId}/${image}"/>`;
        // MEDIA VIDEO ::
        //const mediaVideo = `<video><source src="../../asset/photographers/${photographerId}/${video}" type="video/mp4" /></video>`;
        // MEDIA VERIFICATION ::
        // const mediaFormat = undefined ? mediaPhoto : mediaVideo;
        

        const mediaCard = document.createElement('article');
            mediaCard.setAttribute('class' , 'mediaCard');
        
        // Ouverture du LIGHTBOX
        const cardLink = document.createElement('a');
            cardLink.setAttribute('href' , '')
        
        cardLink.appendChild(mediaCard);
        galleryMedias.appendChild(cardLink);

        const mediaPicture = document.createElement('img');
        mediaPicture.setAttribute('src' ,  `../../asset/photographers/${photographerId}/${image}`);
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
        
        return photographGallery;
    };

    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM };
};