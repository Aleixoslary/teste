var input = document.getElementById('inputText');

var btn = document.getElementById('btnSearch');

function showWarning() {
    if (input.value == '') {
        alert("Atenção, Preencha um valor")
    } else {
        window.location.replace("http://www.google.com.br")
    }
}

fetch('https://www.mocky.io/v2/5e065c7933000091e8ec5d87')
    .then(result => result.json())
    .then(items => {
        console.log(items)
    })