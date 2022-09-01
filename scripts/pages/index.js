import { photographerFactory } from "../factories/photographer.js";
import { getPhotographers } from "../utils/api.js";

    /**
     * Détails des photographes.
     * @returns 
     */

async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

// ___________ search by ID :: ___________
// ON CLICK ON PROFILE PICTURE >> LOAD USER PAGE
let userProfilPicture = document.querySelectorAll('.userOwnPage'); // Profile user link

userProfilPicture.addEventListener( onclick, function(e){
    let ownPage = this.getAttribut('href');
});
/*
// GET USER ID
    const getPhotographerId = photographerFactory(photographerId);
    const getUserById = (urlId, id) => {
        const queryString = window.location.search;   
        const urlId = new URLSearchParams(queryString);   
        const id = urlId.get('id');
        
        return id;
    };
});
// GET DATAS USER
    photographer.forEach(id => {
        return urlId.id;
    })
*/

async function init() {
    // GET DATAS PHOTOGRAPHERS
    const { photographers } = await getPhotographers();
    displayData(photographers);
    getUserById();
};
    
init();
    