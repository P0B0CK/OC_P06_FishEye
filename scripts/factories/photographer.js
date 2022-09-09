/**
 * 
 * @param {*} data 
 * @returns 
 */

export function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    // Crée un lien Hypertext qui renvoie à la page du photographe grâce à son ID.
    const linkPage = document.createElement('a');
        linkPage.setAttribute('href', `../../photographer.html?id=${id}`);
        linkPage.setAttribute('class', 'userOwnPage' );
    
    const picture = `assets/photographers/profiles/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const avatarPicture = document.createElement( 'img' );
            avatarPicture.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
            h2.textContent = name;
        const h3 = document.createElement( 'h3');
            h3.textContent = city + ', '+ country;
        const h4 = document.createElement( 'h4');
            h4.textContent = tagline;
        const p = document.createElement( 'p');
            p.textContent = price + '€/jour';
        
        article.appendChild(linkPage);
            linkPage.appendChild(avatarPicture);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p).classList.add("dailyPrice");

        return (article)
    }
    
    function getUserHeaderDOM() {
        const photographContainer = document.createElement('div');
        photographContainer.setAttribute('class', 'userBanner')
        
        const infoMembers = document.createElement('div');
        infoMembers.setAttribute('class', 'infoMembers');
        infoMembers.setAttribute('class', 'userBanner-container');
        
        const contactMembers = document.createElement('div');
        contactMembers.setAttribute('class', 'contactMembers');
        contactMembers.setAttribute('class', 'userBanner-container');
        
        const avatarMembers = document.createElement('div');
        avatarMembers.setAttribute('class', 'avatarMembers');
        avatarMembers.setAttribute('class', 'userBanner-container');
        
        const avatar = `assets/photographers/profiles/${portrait}`;
        const avatarPicture = document.createElement( 'img' );
        avatarPicture.setAttribute("src", avatar);
        avatarPicture.setAttribute('class', 'userAvatar');
            
            
            photographContainer.appendChild(infoMembers);
                infoMembers.innerHTML = `
                    <h2>${name}</h2>
                    <p class="city">${city + ", " + country}</p>
                    <p class="tagline">${tagline}</p>
                    `;
            
            photographContainer.appendChild(contactMembers);
                contactMembers.innerHTML = `
                    <button class="contact_button" onclick="displayModal()">
                        Contactez-moi
                    </button>
                    `;

            photographContainer.appendChild(avatarMembers);
                avatarMembers.appendChild(avatarPicture);
                
            return photographContainer;
    }

    return { name, picture, id, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM };
};
    


