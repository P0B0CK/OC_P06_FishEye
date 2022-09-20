export async function api() {
    let photographers;
    let media;

    await fetch("../../data/photographers.json")
        .then((res) => res.json())
        .then((data) => {
            photographers = data.photographers;
            media = data.media;
        });
   

    function getMedia(){
        return ({
            media: [... media],
        })
    }

    function getPhotographers(){
        return ({
            photographers: [...photographers],
        })
    }

    return { getMedia, getPhotographers}
}