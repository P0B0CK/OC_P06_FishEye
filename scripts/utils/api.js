export async function getPhotographers() {
    let photographers;
    let data;

    await fetch("../../data/photographers.json")
        .then((res) => res.json())
        .then((data) => photographers = data.photographers);
        console.log(data);
    return ({
        photographers: [...photographers]
    })
}