const textArea = document.querySelector(".text-area-key");
textArea.addEventListener("keyup", () => {

  const adicionarNaPalavra = (contador) => {
    const palavrasContador = document.querySelector(".palavras-contador");
    palavrasContador.innerHTML = contador;
  }

  const adicionarNoCaracteres = (contador) => {
    const caracteresContador = document.querySelector(".caracteres-contador");
    caracteresContador.innerHTML = contador;
  }

  let contadorPalavras = 0;
  if(textArea.value.length == 0){
    adicionarNaPalavra(0);
  }

  const palavras = textArea.value;
  const arrayPalavras = palavras.split(" ");
  for(let i = 0; i < arrayPalavras.length; i++){
    if(arrayPalavras[i].length != 0){
      contadorPalavras++;
    }
  }
  adicionarNaPalavra(contadorPalavras);
  
  let contadorCaracteres = 0;
  const caracteres = textArea.value;
  const arrayCaracteres = caracteres.split("");
  for(let i = 0; i < arrayCaracteres.length; i++){
    if(arrayCaracteres[i] != " "){
      const tamanhoArray = arrayCaracteres[i].length;
      for(let i = 0; i < tamanhoArray; i++){
        contadorCaracteres++;
      }
    } 
  }
  adicionarNoCaracteres(contadorCaracteres);

});