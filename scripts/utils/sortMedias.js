console.log('fonction sortMedia ici')

const selectbox = document.getElementById('selected-filter');

console.log(selectbox)
console.log(selectbox.options)

// écouteur au changement d'état :
selectbox.addEventListener('change', (e) => {
    const optionValue = selectbox.value;
    const array1 = [1, 30, 4, 21, 100000];


    if (optionValue == 'popularity') {
        console.log('=> Order by popularity <=');
        array1.sort((array1.index,) => {
            a - b;
        });
        console.log(array1.sort());
    } else if (optionValue == 'date') {
       console.log('=> Order by date <=');
    } else if (optionValue == 'title') {
       console.log('=> Order by title <=');
    } else {
        return console.log('== SORT issue ==');
    }
})