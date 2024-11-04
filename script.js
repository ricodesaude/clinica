function toggleFields(type) {
    document.getElementById("receitaFields").classList.add("hidden");
    document.getElementById("atestadoFields").classList.add("hidden");
    document.getElementById("examesFields").classList.add("hidden");

    if (type === 'receita') {
        document.getElementById("receitaFields").classList.remove("hidden");
    } else if (type === 'atestado') {
        document.getElementById("atestadoFields").classList.remove("hidden");
    } else if (type === 'exames') {
        document.getElementById("examesFields").classList.remove("hidden");
    }
}

function redirectToAtestado(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos necessários
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataAtestado = document.getElementById("dataAtestado").value;
    const horaAtestado = document.getElementById("horaAtestado").value;
    const cid = document.getElementById("cid").value;
    const motivo = document.getElementById("motivo").value;
    const diasAfasta = document.getElementById("diasAfasta").value;

    // Cria uma URL com os dados preenchidos
    const atestadoUrl = `atestado.html?nome=${encodeURIComponent(nome)}&cpf=${encodeURIComponent(cpf)}&dataAtestado=${encodeURIComponent(dataAtestado)}&horaAtestado=${encodeURIComponent(horaAtestado)}&cid=${encodeURIComponent(cid)}&motivo=${encodeURIComponent(motivo)}`;

    // Redireciona para a nova página
    window.location.href = atestadoUrl;
}
