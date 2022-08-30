// DOM ELEMENTS

let newHeader = document.createElement('header');
//>>>>>>>>>>>>> DIVS
let divLogo = document.createElement('div');
let divSearch = document.createElement('div');
let divNav = document.createElement('div');
//>>>>>>>>>>>>> ELEMENTS
let aLogo = document.createElement('a');
let aPage = document.createElement('a');
let imgLogo = document.createElement('img');
let linkLogo = `assets/images/logo.png`;
let h1 = document.createElement('h1');
let pageMembers = 'Nos Photographes';



// ATTRIBUTS

newHeader.setAttribute("id" , "ban");
//>>>>>>>>>>> LOGO
divLogo.setAttribute('class', 'ban-logo');
aLogo.setAttribute('href', 'index.html');
aLogo.setAttribute('alt' , 'Fisheye Home Page')
imgLogo.setAttribute('src' , linkLogo);
imgLogo.setAttribute('class' , 'logo');
imgLogo.setAttribute('alt' , 'Logo de FishEye');
//>>>>>>>>>>> SEARCH
divSearch.setAttribute('class', 'ban-search');
//>>>>>>>>>>> NAV
divNav.setAttribute('class', 'ban-nav');
aPage.setAttribute('href' , 'photographer.html');
aPage.setAttribute('alt' , 'voir nos photographes');



// CREATION DU HEADER

function moduleHeader() {
    document.body.replaceChild(newHeader, header);
        newHeader.appendChild(divLogo);
            divLogo.appendChild(aLogo);
                aLogo.appendChild(imgLogo);
        newHeader.appendChild(divSearch);
        newHeader.appendChild(divNav);
            divNav.appendChild(aPage);
                aPage.appendChild(h1).textContent = pageMembers;            
}