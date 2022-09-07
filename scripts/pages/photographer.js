import { photographerFactory } from "../factories/photographer.js";
import { getPhotographers } from "../utils/api.js";


async function displayHeader(photographer) {
    const photographerHeader = document.querySelector('.photograph-header');
    
    const photographerModel = photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    photographerHeader.appendChild(userHeaderDOM);
};

export const getPhotographerUserInfos = async (id) => {
    const { photographers } = await getPhotographers();
    const photographerUserInfos = photographers.find(el => el.id == id)
    return photographerUserInfos;
};

export function getIdUrlParam () {
    const queryString = window.location.search;   
    const urlId = new URLSearchParams(queryString);   
    const id = urlId.get('id');
    return id
}

async function init() {
    const id = getIdUrlParam();
    const photographerUserInfo = await getPhotographerUserInfos(id);
    console.log(photographerUserInfo);
    displayHeader(photographerUserInfo);
    
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