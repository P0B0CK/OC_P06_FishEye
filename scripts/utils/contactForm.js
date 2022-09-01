export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

export function closeModal() {
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