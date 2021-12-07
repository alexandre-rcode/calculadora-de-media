function somar() {
    var nome = window.document.getElementById("nome");
  
    var nota1 = window.document.getElementById("nota1");
    var nota2 = window.document.getElementById("nota2");
    var nota3 = window.document.getElementById("nota3");
    var nota4 = window.document.getElementById("nota4");
  
    var aluno = String(nome.value);
    var n1 = Number(nota1.value);
    var n2 = Number(nota2.value);
    var n3 = Number(nota3.value);
    var n4 = Number(nota4.value);
  
    var notaFinal = (n1 + n2 + n3 + n4) / 4;
    var notaF = notaFinal.toFixed(2);
  
    if (notaF >= 6) {
      res.innerHTML = `Bem vindo ${aluno}, sua média foi ${notaF}<br> PARABÉNS! VOCÊ FOI APROVADO!`;
    } else {
      res.innerHTML = `Bem vindo ${aluno}, sua média foi ${notaF}<br> VOCÊ FOI REPROVADO!`;
    }
  }