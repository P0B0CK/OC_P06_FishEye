import { photographerFactory } from "../factories/photographer.js";
import { mediasFactory } from "../factories/medias.js";
import { api } from "../utils/api.js";

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

function displayMedias(media) {
    const photographerMedias = document.querySelector('#main');
     
    const photographerModel = mediasFactory(media);
    const userGalleryDOM = photographerModel.getUserMediasDOM();
    photographerMedias.appendChild(userGalleryDOM);
    //boucle ici
    media.forEach(id => {
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

async function displayUserSpotlight(photographer) {
    const photographerSpot = document.querySelector('#main');
    const photographerModel = await photographerFactory(photographer);
    const userSpotlight = photographerModel.getUserSpotlightDOM();
    photographerSpot.appendChild(userSpotlight);
}

async function init() {
    const id = getIdUrlParam();
    document.photographerId = id;
    const photographerUserInfo = await getPhotographerUserInfos(id);
    const mediaUserInfo = await getMediaUserInfos(id);
    displayHeader(photographerUserInfo);
    displayMedias(mediaUserInfo);
    displayUserSpotlight(photographerUserInfo);
};

init();