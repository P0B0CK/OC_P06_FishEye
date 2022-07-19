/**
 * 
 * @param {*} data 
 * @returns 
 */

function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        /*const div = `<article id="photo" class="test"><img src="${picture}"><h2>Autre data test</h2></article>`;
        const article2 = document.createElement( 'span' );
        article2.innerHTML = div;
        return (article2);*/
        return (article)
    }
    return { name, picture, getUserCardDOM }
}