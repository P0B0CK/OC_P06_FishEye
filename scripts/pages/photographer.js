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
};

export function myMessage() {

    const btnSubmit = document.getElementById('btnSubmit');
    const inputsForm = document.querySelector("form#contactForm input[name='getValue']");

    const inputFirst = document.getElementById('firstname').value;
    const inputLast = document.getElementById('lastname').value;
    const inputEmail = document.getElementById('email').value;
    const inputMsg = document.getElementById('message').value;

    btnSubmit.addEventListener("submit" , () => { 
        inputsForm.forEach(input, () => {
            return console.log( "Nouveau message de " + inputFirst + " " + inputLast + " depuis l'adresse " + inputEmail + " : " + inputMsg );
        });
    return closeModal()
    }); 
};

async function init() {
    const id = getIdUrlParam();
    document.photographerId = id;
    const photographerUserInfo = await getPhotographerUserInfos(id);
    displayHeader(photographerUserInfo);
    displayMedias(photographerUserInfo);
    myMessage();
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