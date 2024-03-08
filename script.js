alert("Olá este é um programa da M inc!")
document.write("Neste programa é possível, fazer um reajuste do salário, calcular o valor das férias e do 13º salário.")

var salario = parseFloat(prompt("Digite o seu salário:"))
var mesesTrabalhados = parseFloat(prompt("Digite a quantidade de meses trabalhados no ano:"))
var aumento = 0
var novoSalario = 0
var ferias = 0
var decimoTerceiro = 0
var opcao = parseFloat(prompt("Selecione uma opção" + "\n" + "1 - Novo Salário" + "\n" + "2 - Férias" + "\n" + "3 - 13º Salário" + "\n" + "4 - Sair"))


if (opcao == 1 && ( salario > 0 && salario <= 1200))  {
    aumento = salario * 0.15;
    novoSalario = salario + aumento;
    alert(`O novo salário é R$ ${novoSalario}`)
} 
    else if (opcao == 1 && (salario > 1200 && salario <= 2400 )) {
        aumento = salario * 0.1;
        novoSalario = salario + aumento;
        alert(`O novo salário é R$ ${novoSalario}`)
    }

    else if (opcao == 1 && salario > 2400) {
        aumento = salario * 0.05;
        novoSalario = salario + aumento;
        alert(`O novo salário é R$ ${novoSalario}`)
    }

    else if (opcao == 1 && salario < 0) {
        alert(`Valor incorreto`)
    }

    else if (opcao == 2 && salario > 0) {
        ferias = salario * 1.33;
        novoSalario = ferias;
        alert(`Você vai receber nas férias R$ ${novoSalario}`)
    }

    else if (opcao == 3 && salario > 0) {
        decimoTerceiro = salario / 12 * mesesTrabalhados
        novoSalario = salario + decimoTerceiro;
        alert(`Seu 13º é de R$ ${decimoTerceiro}`)
    }

    else if (opcao == 4 && salario > 0) {
        alert(`Saindo do sistema`)
    }

    else [
        alert("Opção indisponível")
    ]


// Matheus Machado Aguiar - Matrícula nº 2325339


