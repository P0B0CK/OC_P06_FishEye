import { photographerFactory } from "../factories/photographer.js";
import { mediasFactory } from "../factories/medias.js";
import { api } from "../utils/api.js";
// modifier api et import 

async function displayHeader(photographer) {
    const photographerHeader = document.querySelector('.photograph-header');
    
    const photographerModel = await photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    photographerHeader.appendChild(userHeaderDOM);
};

export const getPhotographerUserInfos = async (id) => {
    const apiPhotographers = await api();
    const { photographers } = apiPhotographers.getPhotographers();
    const photographerUserInfos = photographers.find(el => el.id == id)
    return photographerUserInfos;
};

export function getIdUrlParam () {
    const queryString = window.location.search;   
    const urlId = new URLSearchParams(queryString);   
    const id = urlId.get('id');
    return id
}

async function displayMedias(photographer) {
    const photographerMedias = document.querySelector('#main');
     
    const photographerModel = await mediasFactory(photographer);
    const userGalleryDOM = photographerModel.getUserMediasDOM();
    photographerMedias.appendChild(userGalleryDOM);
    //boucle ici
    photographer.forEach(id => {
        const mediaCard = mediasFactory(id);
        mediaCard.getUserMediasDOM();
    });
};

export const getMediaUserInfos = async (id) => {
    const apiMedia = await api();
    const { media } = apiMedia.getMedia();
    const mediaUserInfos = media.filter(el => el.photographerId == id);
    return mediaUserInfos;
};

async function init() {
    const id = getIdUrlParam();
    document.photographerId = id;
    const photographerUserInfo = await getPhotographerUserInfos(id);
    const mediaUserInfo = await getMediaUserInfos(id);
    displayHeader(photographerUserInfo);
    displayMedias(mediaUserInfo);
};

init();

// search by ID ::
/*
const queryString = window.location.search;   
const urlParams = new URLSearchParams(queryString);   
const id = urlParams.get('id');

let getUserId = photographers.find( el => {
    return el.id === `${id}`
})
*/

/*
async function searchUserById() {
    const getUserById = (getPhotographers(), searchId) => {
        return getPhotographers.filter(id => id.indexof('id'));
    }
}
*/
//console.log(searchUserById(925));