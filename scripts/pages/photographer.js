import { photographerFactory } from "../factories/photographer.js";
import { getPhotographers } from "../utils/api.js";


async function displayHeader(photographer) {
    const photographerHeader = document.querySelector('.photographer_header');

        const photographerModel = photographerFactory(photographer);
        const userHeaderDOM = photographerModel.getUserHeaderDOM();
        photographerHeader.appendChild(userHeaderDOM);
};


async function init() {
    const { photographer } = await getPhotographers();
    displayHeader(photographer);
};

init();