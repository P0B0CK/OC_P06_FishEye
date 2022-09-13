import { getPhotographerUserInfos, getIdUrlParam } from "../pages/photographer.js";

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    // restituer champs du formulaire getE.value
    // console.log()
});

async function displayModal() {
    const modal = document.getElementById("contact_modal");
    const id = getIdUrlParam();
    const userInfo = await getPhotographerUserInfos(id);
    console.log(userInfo);
    const contactMe = document.getElementById('nameContact');
    contactMe.innerHTML = `
    Contactez-moi ${userInfo.name}
    `;
    
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.closeModal = closeModal;
document.displayModal = displayModal;

/*
async function getSearchById() {
    const queryString = window.location.search;   
    const urlParams = new URLSearchParams(queryString);   
    const id = urlParams.get('id');
};*/

/*
        let SearchLocation = window.location.search;
        let searchAdd = new URLSearchParams(SearchLocation);
        let searchById = searchAdd.get('id');
*/