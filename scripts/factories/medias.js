/**
 * 
 * @param {*} data 
 * @returns 
 */

export function mediasFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;



    function getUserMediasDOM(){
        const photographGallery = document.createElement('div');
        photographGallery.setAttribute('id', 'photograph-gallery');

        const galleryFilter = document.createElement('div');
        galleryFilter.setAttribute('id', 'gallery-filter');
       
        const galleryMedias = document.createElement('div');
        galleryMedias.setAttribute('id', 'gallery-medias');

        photographGallery.appendChild(galleryFilter);
            galleryFilter.innerHTML = `
                <label for="medias-filter">Trier par </label>
                    <select name="medias-select" id="medias-filter">
                        <option value="">--Please choose an option--</option>
                        <option value="pop">Popularité</option>
                        <option value="date">Date</option>
                        <option value="titre">titre</option>
                    </select>`;
        
        photographGallery.appendChild(galleryMedias);
        // POUR CHAQUE elmt "media", Créer un elmt <div>.
        //  // Composé d'un elmt CONTENAIRE de l'IMG ou VIDEO.
        //  // Composé d'un elmt LEGENDE.
        //  //  // titre media + nbr likes.

        return photographGallery
    }

    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM };
};