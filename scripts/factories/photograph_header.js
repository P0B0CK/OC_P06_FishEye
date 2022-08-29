export function photographHeader() {
    
    // crée les éléments DIV
    const infoMembers = document.createElement('div');
    const contactMembers = document.createElement('div');
    const avatarMembers = document.createElement('div');
    


    //assigne aux éléments un attribut class
    
    infoMembers.setAttribute('class', 'infoMembers');
    contactMembers.setAttribute('class', 'contactMembers');
    avatarMembers.setAttribute('class', 'avatarMembers');
    


    // sélectionne l'élément photograp-header
    
    const photographBanner = document.querySelector('.photograph-header');
    console.log('Je suis ici')

    
    //crée un élément enfant
    
    photographBanner.appendChild(infoMembers);
        // nom + ville + tagline
        infoMembers.innerHTML = `
            <h2>${name}</h1>
            <p class="city">${city + ", " + country}</p>
            <p class="tagline">${tagline}</p>
            `;
    photographBanner.appendChild(contactMembers);
        // récupération du <button>
    photographBanner.appendChild(avatarMembers);
        // doit recevoir la photo de profil
    return {infoMembers, contactMembers, avatarMembers};
};
