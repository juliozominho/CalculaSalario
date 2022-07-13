function calcular(){
    var nome = document.getElementById("nome").value;
    var salario = parseFloat(document.getElementById("salario").value);
    var vendas = parseFloat(document.getElementById("vendas").value);
    

    document.getElementById("mensagem").innerHTML =
     nome + ", seu salário esse mês é de: " + parseFloat(salario + vendas *0.15).toFixed(2);
}