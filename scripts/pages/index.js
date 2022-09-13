import { photographerFactory } from "../factories/photographer.js";
import { api } from "../utils/api.js";

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

async function init() {
    // GET DATAS PHOTOGRAPHERS
    const apiPhotographers = await api();
    const { photographers } = apiPhotographers.getPhotographers();
    displayData(photographers);
    getUserById();
};
    
init();
    