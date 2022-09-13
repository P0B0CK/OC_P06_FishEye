export async function api() {
    let photographers;
    let media;

    await fetch("../../data/photographers.json")
        .then((res) => res.json())
        .then((data) => {
            photographers = data.photographers;
            media = data.media;
        });
   

    function getMedias(){
        return ({
            medias: [... media],
        })
    }

    function getPhotographers(){
        return ({
            photographers: [...photographers],
        })
    }

    return { getMedias, getPhotographers}
}