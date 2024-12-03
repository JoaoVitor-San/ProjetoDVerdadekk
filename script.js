document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacao = document.getElementById("operacao").value;
  
    const operacoes = {
      soma: (a, b) => a + b,
      subtração: (a, b) => a - b,
      multiplicação: (a, b) => a * b,
      divisão: (a, b) => b !== 0 ? a / b : "Erro: Divisão por zero",
    };
  

    const input = { numero1, numero2, operacao };
    const { numero1: n1, numero2: n2, operacao: op } = input;
  
    const resultado = operacoes[op]
      ? operacoes[op](n1, n2)
      : "Operação inválida!";
  
    document.getElementById("resultado").textContent = "O resultado da operação é: " + resultado;
  });
