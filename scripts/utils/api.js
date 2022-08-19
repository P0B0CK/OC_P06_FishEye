export async function getPhotographers() {
    let photographers;

    await fetch("../../data/photographers.json")
        .then((res) => res.json())
        .then((data) => photographers = data.photographers)
    return ({
        .catch(console.log(data))
    })
}