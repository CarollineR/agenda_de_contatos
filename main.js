const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputTelephone = document.getElementById('telephone');
const inputFavorite = document.getElementById('favorite');

const favoriteIcon = '<i class="fas fa-star" style="color:gold;"></i>';

const names = [];
const telephones = [];
let numberOfFavorites = 0;
let numberOfContacts = 0;

let linhas = '';

form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function isFavorite(){
    if (inputFavorite.checked){
        return true
    }
}

function adicionaLinha() {
    if(names.includes(inputName.value)) {
        alert(`O nome ${inputName.value} já existe.`);
    } else if (telephones.includes(inputTelephone.value)){
        alert(`O telefone ${inputTelephone.value} já existe.`);
    } else {
        names.push(inputName.value);
        telephones.push(inputTelephone.value);
        numberOfContacts++;

        let linha = '<tr>';
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputTelephone.value}</td>`;
        linha += `<td><a href="tel:${inputTelephone.value}"><button type="button">Ligar</button></a></td>`;
        linha += `<td>${isFavorite() ? favoriteIcon :''}</td>`;
        linha += `</tr>`;
        linhas += linha;

        console.log(inputName.value)
        console.log(inputTelephone)
        console.log (`${isFavorite() ? 'Contato salvo e favoritado.' : 'Contato salvo.'}`)

        if(isFavorite()){
            numberOfFavorites++
        }
    }

    inputName.value = '';
    inputTelephone.value = '';
    inputFavorite.checked = false
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    const totalContacts = document.getElementById('contacts');
    totalContacts.innerHTML = `Contatos: ${numberOfContacts}`;

    const totalFavorites = document.getElementById('favorites');
    totalFavorites.innerHTML = `Favoritos: ${numberOfFavorites}`
}

    $(document).ready(function(){
    $('#telephone').mask('(00) 00000-0000');
    });