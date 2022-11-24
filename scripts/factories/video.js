export function videosFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    
    function getVideoDOM() {

        return `<video width="350" height="300" class="mediaStyleVid">
        <source src="assets/photographers/${photographerId}/${video}"" type=video/mp4>
        ERROR to load file
        </video>`;
    }

    function getVideoLbDOM() {

        return `<video width="350" height="300" class="mediaStyleVid" controls>
        <source src="assets/photographers/${photographerId}/${video}"" type=video/mp4>
        ERROR to load file
        </video>`;
    }

    return {getVideoDOM, getVideoLbDOM};
}