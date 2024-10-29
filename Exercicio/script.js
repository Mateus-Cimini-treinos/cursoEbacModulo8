console.log('carregou1');
const modal = document.querySelector('.modal');
const openModalBtn = document.getElementById('btnAdicionar');
const closeModalBtn = document.querySelector('.modal-close');
const cancelBtn = document.querySelector('.modal-cancel');
const saveBtn = document.querySelector('.modal-save'); // Assumindo que você tem um botão "Salvar" com essa classe
const inputs = modal.querySelectorAll('input'); // Seleciona todos os inputs dentro do modal

// Abre o modal
openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
    console.log(`click`);
});

// Fecha o modal ao clicar no botão de fechar (X)
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Limpa os campos de input e fecha o modal ao clicar no botão "Cancelar"
cancelBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = ''; // Limpa cada campo de input
    });
    modal.classList.remove('show');
});

// Fecha o modal ao clicar fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Fecha o modal ao clicar no botão "Salvar"
// Adicione a lógica que você deseja para salvar aqui
saveBtn.addEventListener('click', () => {
    // Lógica de salvamento (se necessário)
    modal.classList.remove('show'); // Fecha o modal
});

console.log('carregou');
