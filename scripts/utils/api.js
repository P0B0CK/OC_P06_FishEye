export async function getPhotographers() {
    let photographers;
    let media;

    await fetch("../../data/photographers.json")
        .then((res) => res.json())
        .then((data) => photographers = data.photographers)
        .then((data) => media = data.media);
    return ({
        photographers: [...photographers],
        media : [...media]
    })
}