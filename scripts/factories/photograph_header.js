export function photographHeader() {
    
    // créer les éléments DIV
    const infoMembers = document.createElement('div');
    const contactMembers = document.createElement('div');
    const avatarMembers = document.createElement('div');
    


    //assigne aux éléments un attribut class
    
    infoMembers.setAttribute('class', 'infoMembers');
    contactMembers.setAttribute('class', 'contactMembers');
    avatarMembers.setAttribute('class', 'avatarMembers');
    


    // sélectionne l'élément photograp-header
    
    let photographBanner = document.querySelector('.photograph-header');
    

    
    //crée un élément enfant
    
    photographBanner.appendChild(infoMembers);
        // nom + ville + tagline 
    photographBanner.appendChild(contactMembers);
        // récupération du <button>
    photographBanner.appendChild(avatarMembers);
        // doit recevoir la photo de profil
};