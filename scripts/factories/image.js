export function imagesFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    
    function getImageDOM() {
        return `<img src="assets/photographers/${photographerId}/${image}" class="mediaStyleImg" alt="${title}"/>`;
    }

    return {getImageDOM};
}