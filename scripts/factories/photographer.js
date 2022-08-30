/**
 * 
 * @param {*} data 
 * @returns 
 */

export function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    // Crée un lien Hypertext qui renvoie à la page du photographe grâce à son ID.
    /*const linkPage = document.createElement('a');
        linkPage.setAttribute('href', searchByIdUser);*/
    
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
           const photographHeader = document.querySelector('.photograph-header');
   
            const infoMembers = document.createElement('div');
            const contactMembers = document.createElement('div');
            const avatarMembers = document.createElement('div');
    
            infoMembers.setAttribute('class', 'infoMembers');
            contactMembers.setAttribute('class', 'contactMembers');
            avatarMembers.setAttribute('class', 'avatarMembers');
            
            photographHeader.appendChild(infoMembers);
            infoMembers.innerHTML = `
                    <h2>${name}</h2>
                    <p class="city">${city + ", " + country}</p>
                    <p class="tagline">${tagline}</p>
                    `;
            
            photographHeader.appendChild(contactMembers);
            contactMembers = `
                    <button class="contact_button" onclick="displayModal()">
                        Contactez-moi
                    </button>
                    `;
        }
        return photographHeader;
    }
    
    return { name, picture, id, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM/*, searchByIdUser*/ };


