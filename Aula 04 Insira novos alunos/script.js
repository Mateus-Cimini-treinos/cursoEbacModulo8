const form = document.getElementById('form-Atividade');
const imgAprovado = `<img src="/doc/aprovado.png" alt="emoji-aprovado"></img>`
const imgReprovado = `<img src="/doc/reprovado.png" alt="emoji-reprovado"></img>`

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-Atividade');
    const inputNotaAtividade = document.getElementById('nota-Atividade');


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''

});