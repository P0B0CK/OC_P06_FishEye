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
        const cardDetail = document.createElement('div');
            cardDetail.setAttribute("class", 'card-detail');

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
        article.appendChild(cardDetail);
            cardDetail.appendChild(h2);
            cardDetail.appendChild(h3);
            cardDetail.appendChild(h4);
            cardDetail.appendChild(p).classList.add("dailyPrice");

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

    function getUserSpotlightDOM(data) {        
        
        const spotlight = document.createElement('span');
        const likesSpot = document.createElement('div');
        const priceSpot = document.createElement('div');
        
        spotlight.setAttribute('id', 'spotlight' );
        likesSpot.setAttribute('class', 'likes-spot');
        priceSpot.setAttribute('class' , 'price-spot');
        
        spotlight.appendChild(likesSpot);
        spotlight.appendChild(priceSpot);
        
        // Medias cards
        const mediaSection = document.querySelector('.media-section');
        // ELT contenant le nombre de like par media
        const likesCounters = document.querySelectorAll('.likes-count');
        // Toutes les cartes de media            
        const mediaCards = mediaSection.children

        // SOMME des likes par photographe
        let likesSum = 0;
    
        // fonction de calcul  (addition) des likes
        // retourne la somme de tout les likes
        for(let i = 0 ; i < likesCounters.length ; i++) {
            likesSum += Number(likesCounters[i].innerHTML)
        }        

        likesSpot.innerHTML=`<span class="likes-total-count">${likesSum}</span><i class="fa-sharp fa-solid fa-heart black">`;
        priceSpot.innerHTML=`<span>${price}€ / jour</span>`;

        return ( spotlight );
    }

    return { name, picture, id, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM, getUserSpotlightDOM };
};
    


