re = new RegExp("^[a-z/s ]+$");

function exibirContexto() {

    document.querySelector("#output-text").value = "";
    document.querySelector("#output-text").classList.remove("background");
    document.querySelector("#png").classList.remove("z-index");
    document.querySelector(".aguardoMensagem").classList.remove("z-index");
}

function exibirConteudo(textoEditado) {

    document.querySelector("#output-text").classList.add("background");
    document.querySelector("#png").classList.add("z-index");  
    document.querySelector(".aguardoMensagem").classList.add("z-index");
    document.querySelector("#output-text").value = textoEditado;
    document.querySelector("#input-text").value = "";
    document.querySelector("#input-text").focus();
    event.preventDefault();   
}

function exibirRegra() {

    document.querySelector("#input-text").setCustomValidity("Não use letras maiúsculas ou acentos");

}

function apagarAviso() {

    document.querySelector("#input-text").setCustomValidity("");

}

document.querySelector("#criptografar").addEventListener("click", () => {
   
    texto = document.querySelector("#input-text").value;
    
    if(texto.match(re)) {

        let textoEditado = texto.replace(/e/g, "enter");
        textoEditado = textoEditado.replace(/i/g, "imes");
        textoEditado = textoEditado.replace(/a/g, "ai");
        textoEditado = textoEditado.replace(/o/g, "ober");
        textoEditado = textoEditado.replace(/u/g, "ufat");

        exibirConteudo(textoEditado); 

    }else if (!texto.match(re) && texto !== "") {
        
        exibirRegra();
        setTimeout(apagarAviso, 1200);

    }

});

document.querySelector("#descriptografar").addEventListener("click", () => {

    texto = document.querySelector("#input-text").value;
    

    if(texto.match(re)) {

        let textoEditado = texto.replace(/enter/g, "e");
        textoEditado = textoEditado.replace(/imes/g, "i");
        textoEditado = textoEditado.replace(/ai/g, "a");
        textoEditado = textoEditado.replace(/ober/g, "o");
        textoEditado = textoEditado.replace(/ufat/g, "u");

        exibirConteudo(textoEditado);

    }else if(!texto.match(re) && texto !== "") {

        exibirRegra();
        setTimeout(apagarAviso, 2000)
        
    }

});

document.querySelector("#copiar").addEventListener("click", () => {
    
    textoCopiado = document.querySelector("#output-text").value;
    

    
    if(textoCopiado != "") {
        
        textoCopiado = document.querySelector("#output-text").select();
        document.execCommand("copy");
        exibirContexto();
        document.querySelector("#input-text").focus();

    }  

});

document.querySelector("#limpar").addEventListener("click", () => {

    exibirContexto();
    document.querySelector("#input-text").value = "";
    document.querySelector("#input-text").focus();

}); 