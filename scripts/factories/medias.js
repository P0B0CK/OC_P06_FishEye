/**
 * 
 * @param {*} data 
 * @returns 
 */

export function mediasFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;



    function getUserMediasDOM(){
        // MAIN SECTION ::
        const mediaSection = document.querySelector(".media-section");
        
        // ARTICLE MEDIACARD ::
        // créer l'article façon innerHTML.
        // Condition IF d'affichage selon photo/video
        // mediaCard.innerHTML =`
        //         <img src="../../assets/photographers/${photographerId}/${image}" title="${title}"/>
        //         <h4 class="cardTitle">${title}</h4>
        //         <p class="cardNbrLikes">${likes}</p>
        //     `;
            const mediaPictCard = document.createElement('article');
            mediaPictCard.setAttribute('class' , 'media-card');
            mediaPictCard.innerHTML =`
                <img src="../../assets/photographers/${photographerId}/${image}" title="${title}"/>
                <h4 class="cardTitle">${title}</h4>
                <p class="cardNbrLikes">${likes}</p>`;

            const mediaVidCard = document.createElement('article');
            mediaVidCard.setAttribute('class' , 'media-card');
            mediaVidCard.innerHTML =`
            <video width="350" height="300" controls>
                <source src="../../assets/photographers/${photographerId}/${video}" title="${title}" type=video/mp4>
            </video>
                <h4 class="cardTitle">${title}</h4>
                <p class="cardNbrLikes">${likes}</p>`;
        
        // TEST DE LA CONDITION ::
        //
        //     if (${image} == null) {
        //         mediaVidCard.innerHTML =`
        //             <video width="350" height="300" controls>
        //                 <source src="../../assets/photographers/${photographerId}/${video}" title="${title}" type=video/mp4>
        //             </video>
        //             <video src="" title="${title}"/>
        //             <h4 class="cardTitle">${title}</h4>
        //             <p class="cardNbrLikes">${likes}</p>
        //             `;
        //     } else (${image} === ${image}) {
        //         mediaCard.innerHTML =`
        //             <img src="../../assets/photographers/${photographerId}/${image}" title="${title}"/>
        //             <h4 class="cardTitle">${title}</h4>
        //             <p class="cardNbrLikes">${likes}</p>`;
        //     };
        // });
        
        const mediaFormat = undefined ? mediaSection.appendChild(mediaPictCard) : mediaSection.appendChild(mediaVidCard);

        return mediaFormat;
    };
    
    return { id, photographerId, title, image, likes, date, price, getUserMediasDOM };
};


// MEDIA PHOTOGRAPHY ::
// const mediaPhoto = `<img src="../../asset/photographers/${photographerId}/${image}"/>`;
// MEDIA VIDEO ::
//const mediaVideo = `<video><source src="../../asset/photographers/${photographerId}/${video}" type="video/mp4" /></video>`;
// MEDIA VERIFICATION ::
// const mediaIdFromUser = media.map(photographerId => id);
// console.log(mediaIdFromUser);

// const mediaPicture = document.createElement('img');
// mediaPicture.setAttribute('src' ,  `../../asset/photographers?id=${photographerId}/${id}`);
// mediaCard.appendChild(mediaPicture);