/**
 * 
 * @param {*} data 
 * @returns 
 */

export function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    // Crée un lien Hypertext qui renvoie à la page du photographe grâce à son ID.
    const linkPage = document.createElement('a');
        linkPage.setAttribute('href', searchByIdUser);
    
    const picture = `assets/photographers/profiles/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
            img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
            h2.textContent = name;
        const h3 = document.createElement( 'h3');
            h3.textContent = city + ', '+ country;
        const h4 = document.createElement( 'h4');
            h4.textContent = tagline;
        const p = document.createElement( 'p');
            p.textContent = price + '€/jour';
        
        article.appendChild(linkPage);
            linkPage.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p).classList.add("dailyPrice");

        return (article)
    }

    function getUserHeaderDOM() {
           
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
            console.log('JE SUIS ICI')
    //crée un élément enfant
            infoMembers.innerHTML = `
                    <h2>${name}</h2>
                    <p class="city">${city + ", " + country}</p>
                    <p class="tagline">${tagline}</p>
                    `;
            photographBanner.appendChild(infoMembers);
                // nom + ville + tagline
            photographBanner.appendChild(contactMembers);
                // récupération du <button>
            photographBanner.appendChild(avatarMembers);
                // doit recevoir la photo de profil
            return {infoMembers, contactMembers, avatarMembers};
        };
        return (null)
    }

    //fonction description
    
    // Paramètre de configuration pour URL : Seacrh param
/*  
    const queryString = window.location.search;   
    const urlParams = new URLSearchParams(queryString);   
    const id = urlParams.get('id');
*/  
    // On détermine ici l'emplacement de la recherche,
    // Avec la fonction de création on détermine l'élément pris en compte : l'ID.
    function searchByIdUser() {
        let SearchLocation = window.location.search;
        let searchAdd = new URLSearchParams(SearchLocation);
        let searchById = searchAdd.get('id');
    }

    return { name, picture, id, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM, searchByIdUser }


