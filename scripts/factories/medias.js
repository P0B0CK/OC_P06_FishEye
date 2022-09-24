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
        const mediaPictCard = document.createElement('article');
        mediaPictCard.setAttribute('class' , 'media-card');
        mediaPictCard.innerHTML =`
            <img src="assets/photographers/${photographerId}/${image}"/>
            <div class="card-legendary">
                <h4 class="cardTitle">${title}</h4>
                <p class="cardNbrLikes">${likes}</p><i class="fa-sharp fa-solid fa-heart"></i>
            </div>`;

        const mediaVidCard = document.createElement('article');
        mediaVidCard.setAttribute('class' , 'media-card');
        mediaVidCard.innerHTML =`
            <video width="350" height="300" controls>
                <source src="assets/photographers/${photographerId}/${video}" title="${title}" type=video/mp4>
            </video>
            <div class="card-legendary">
                <h4 class="cardTitle">${title}</h4>
                <p class="cardNbrLikes">${likes}</p><i class="fa-sharp fa-solid fa-heart"></i>
            </div>`;
        
        const mediaFormat = undefined ? mediaSection.appendChild(mediaVidCard) : mediaSection.appendChild(mediaPictCard);
        
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