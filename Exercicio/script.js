
// MODAL

const modal = document.querySelector('.modal');
const openModalBtn = document.getElementById('btnAdicionar');
const closeModalBtn = document.querySelector('.modal-close');
const cancelBtn = document.querySelector('.modal-cancel');
const saveBtn = document.querySelector('.modal-save');
const inputs = modal.querySelectorAll('input');

// Abrir modal
openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
});


//fechar modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
});


// Limpar campos e fechar modal ao cancelar
cancelBtn.addEventListener('click', () => {
    inputs.forEach(input => input.value = ''); 
    modal.classList.remove('show');
});


// botao de salvar contato (por enqianto limpa os campos e fecha o modal)
saveBtn.addEventListener('click', () => {
    inputs.forEach(input => input.value = ''); 
    modal.classList.remove('show');
});



// BOTAO DE PESQUISA

//Fazerndo o botao de pesquisa fucionar
const pesquisa = document.querySelector(".pesquisa");
const botao = document.querySelector(".botao");
const pergunta = document.querySelector(".pergunta");

botao.addEventListener("click" , () => {
    pesquisa.classList.toggle("active");
    pergunta.focus();
});



// TABELA

const nome =