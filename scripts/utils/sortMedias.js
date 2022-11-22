console.log('fonction sortMedia ici')

const selectbox = document.getElementById('selected-filter');

console.log(selectbox)
console.log(selectbox.options)

// écouteur au changement d'état :
selectbox.addEventListener('change', (e) => {
    const optionValue = selectbox.value;

    if (optionValue == 'popularity') {
        return console.log('OK c\'est bien la popularité :P');
    } else if (optionValue == 'date') {
        return console.log('OK c\'est bien la date :P');
    } else if (optionValue == 'title') {
        return console.log('OK c\'est bien le titre :P');
    } else {
        return console.log('SORT issue');
    }
})