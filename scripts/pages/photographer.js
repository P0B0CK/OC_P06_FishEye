import { photographerFactory } from "../factories/photographer.js";

//Mettre le code JavaScript lié à la page photographer.html

async function displayHeader(photographer) {
    const photographerHeader = document.querySelector('.photographer_header');

        const photographerModel = photographerFactory(photographer);
        const userHeaderDOM = photographerModel.getUserHeaderDOM();
        photographerHeader.appendChild(userHeaderDOM);
};

async function init() {
    // Récupère l'ID du photographe à partir de l'url
    const queryString = window.location.search;   
    const urlParams = new URLSearchParams(queryString);   
    const id = urlParams.get('id');
    // Restituer à partir de l'API les données du photographe
    const { photographer } = await getPhotographerById(); // fonction de recherche du photographe
    // Afficher le header
    displayHeader(photographer);
};

init();

/*
        let SearchLocation = window.location.search;
        let searchAdd = new URLSearchParams(SearchLocation);
        let searchById = searchAdd.get('id');
*/