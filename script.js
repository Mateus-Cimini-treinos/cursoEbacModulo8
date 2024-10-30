// TABELA

let nomeInput = '';
let numeroInput = '';
let linhas = [];
let nomes = [];
let contatos = [];
let totalContatos = 0;
const form = document.getElementById('modal-form');

// Função para adicionar eventos ao botao de  excluir
function adicionarEventosBotoes() {
    const botoesExcluir = document.querySelectorAll(".btn-delete");

    botoesExcluir.forEach((botao, index) => {
        botao.addEventListener("click", () => excluirContato(index));
    });
}



// Função para excluir contato
function excluirContato(index) {
    linhas.splice(index, 1);
    atualizarTabela();       
}

// Função para atualizar a tabela após excluir
function atualizarTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas.join(''); 
    atualizaTotalContatos();                 
    adicionarEventosBotoes();               
}

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

// botao de salvar contato 
saveBtn.addEventListener('click', () => {
    nomeInput = document.getElementById('item-name').value;
    numeroInput = document.getElementById('item-number').value;

    if (nomes.includes(nomeInput)) {
        alert(`O nome ${nomeInput} ja pertence a um contato, salve o contato com outro nome`)
    } else if (contatos.includes(numeroInput)) {
        alert(`O numero ${numeroInput} ja pertence a um contato, salve o contato com outro numero`)
    } else if (!/^\d+$/.test(numeroInput)) {
        alert("Por favor, insira apenas números no campo de número.");
    } else {
        nomes.push(nomeInput);
        contatos.push(numeroInput)
        let linha = '<tr>';
        linha += `<td>${nomeInput}</td>`;
        linha += `<td>${numeroInput}</td>`;
        linha += `
        <td>
            <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
        </td>`;
        linha += `</tr>`;
    
        linhas.push(linha); 

        totalContatos += 1;
    }



    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas.join('');

    atualizaTotalContatos();
    adicionarEventosBotoes();

    clearInputs();
    toggleModal(false);
});

function atualizaTotalContatos() {
    let linhape = `<tr>`;
    linhape += `<td>Total</td>`;
    linhape += `<td colspan="5">${totalContatos} Contatos</td>`;
    linhape += `</tr>`;

    const rodapeTabela = document.querySelector('tfoot');
    rodapeTabela.innerHTML = linhape;
}

// BOTAO DE PESQUISA
const pesquisa = document.querySelector(".pesquisa");
const botao = document.querySelector(".botao");
const pergunta = document.querySelector(".pergunta");

botao.addEventListener("click", () => {
    pesquisa.classList.toggle("active");
    pergunta.focus();
});

// Realizar pesquisa
const pesquisaInput = document.querySelector('.pergunta');
pesquisaInput.addEventListener("input", () => {
    const termoPesquisa = pesquisaInput.value.toLowerCase();
    const linhasTabela = document.querySelectorAll('tbody tr');

    linhasTabela.forEach(linha => {
        const nomeContato = linha.querySelector("td:first-child").textContent.toLowerCase();
        const numeroContato = linha.querySelector("td:nth-child(2)").textContent.toLowerCase();

        if (nomeContato.includes(termoPesquisa) || numeroContato.includes(termoPesquisa)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
});
