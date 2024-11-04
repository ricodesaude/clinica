<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura as informações do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $paymentMethod = htmlspecialchars($_POST['paymentMethod']);

    // Cria uma string para armazenar as informações
    $data = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\nMétodo de Pagamento: $paymentMethod\n\n";
    
    // Define o nome do arquivo
    $filename = "pagamentos.txt";

    // Salva as informações no arquivo
    file_put_contents($filename, $data, FILE_APPEND | LOCK_EX);

    // Retorna uma resposta
    echo "Pagamento processado com sucesso! Informações salvas.";
} else {
    echo "Método inválido.";
}
?>
