
// TABELA

let nomeInput = '';
let numeroInput = '';
let linhas = [];
let totalContatos = 0
const form = document.getElementById('modal-form');


//Botões de ação



// MODAL

const modal = document.querySelector('.modal');
const openModalBtn = document.getElementById('btnAdicionar');
const closeModalBtn = document.querySelector('.modal-close');
const cancelBtn = document.querySelector('.modal-cancel');
const saveBtn = document.querySelector('.modal-save');
const inputs = modal.querySelectorAll('input');


// Abrir e Fechar Modal
const toggleModal = (show) => modal.classList.toggle('show', show);
openModalBtn.addEventListener('click', () => toggleModal(true));
closeModalBtn.addEventListener('click', () => toggleModal(false));
modal.addEventListener('click', (e) => {
    if (e.target === modal) toggleModal(false);
});


// Limpar Campos e Fechar Modal ao Cancelar
const clearInputs = () => inputs.forEach(input => input.value = '');
cancelBtn.addEventListener('click', () => {
    clearInputs();
    toggleModal(false);
});

// botao de salvar contato (por enquanto limpa os campos e fecha o modal)
saveBtn.addEventListener('click', () => {
    nomeInput = document.getElementById('item-name').value;
    numeroInput = document.getElementById('item-number').value;


    let linha = '<tr>';
    linha += `<td>${nomeInput}</td>`;
    linha += `<td>${numeroInput}</td>`;
    linha += `
    <td>
        <button class="btn-edit"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
    </td>`;
    linha += `</tr>`;

    


    linhas += linha;
    totalContatos += 1 
    console.log(totalContatos);
    

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    atualizaTotalContatos();

    clearInputs();
    toggleModal(false);
});

function atualizaTotalContatos() {

    let linhape = `<tr>`
    linhape += `<td>Total</td>`
    linhape += `<td colspan="5">${totalContatos} Contatos</td>`
    linhape += `</tr>`


    const rodapeTabela = document.querySelector('tfoot');
    rodapeTabela.innerHTML = linhape
}



// BOTAO DE PESQUISA

//Fazerndo o botao de pesquisa ter animaçao
const pesquisa = document.querySelector(".pesquisa");
const botao = document.querySelector(".botao");
const pergunta = document.querySelector(".pergunta");

botao.addEventListener("click" , () => {
    pesquisa.classList.toggle("active");
    pergunta.focus();
});


//fazendo ele realmente pesquisar
const pesquisaInput = document.querySelector('.pergunta');
pesquisaInput.addEventListener("input", () => {
    const termoPesquisa = pesquisaInput.value.toLowerCase();
    const linhasTabela = document.querySelectorAll('tbody tr');

    linhasTabela.forEach(linha => {
        const nomeContato = linha.querySelector("td:first-child").textContent.toLocaleLowerCase();
        const numeroContato = linha.querySelector("td:nth-child(2)").textContent.toLowerCase();

        if (nomeContato.includes(termoPesquisa) || numeroContato.includes(termoPesquisa)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";

        }
    })
})








