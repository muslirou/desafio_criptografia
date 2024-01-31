alert('Insira somente letras minúsculas e sem acento');

document.getElementById("copy").style.display = "inline";

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h3', 'Nenhuma mensagem encontrada');
    exibirTextoNaTela('p', 'Digite o texto que você deseja criptografar ou descriptografar.');    
}

exibirMensagemInicial();

function codificarTexto () {
    let texto = document.getElementById('apresentacao__insercao__texto').value;
    
    let novoTexto = '';

    for (let index = 0; index < texto.length; index++) {
        i = texto[index];
        switch(i){
            case 'a':
                i = "ai";
                break;
            case 'e':
                i = "enter";
                break;
            case 'i':
                i = "imes"
                break;
            case 'o':
                i = "ober"
                break;
            case 'u':
                i = "ufat"
                break;
            default:
                break;
        }
        novoTexto += i;
    }   
    
    let campo = document.getElementById('res')
    campo.innerHTML = novoTexto;

    document.getElementById("apresentacao__retorno__telaInicial").style.display = "none";
    document.getElementById("copy").style.display = "inline";
    
}

function descodificarTexto () {
    let textoCod = document.getElementById('apresentacao__insercao__texto').value;
    
    let textoDescodificado = '';

    for (let index = 0; index < textoCod.length; index++) {
        l = textoCod[index];
        switch(l){
            case 'a':
                l = textoCod[index ++];
                l = 'a';
                break;
            case 'e':
                l = textoCod[index ++] + textoCod[index ++] + textoCod[index ++] + textoCod[index ++];
                l = 'e';
                break;
            case 'i':
                l = textoCod[index ++] + textoCod[index ++] + textoCod[index ++];
                l = 'i';
                break;
            case 'o':
                l = textoCod[index ++] + textoCod[index ++] + textoCod[index ++];
                l = 'o';
                break;
            case 'u':
                l = textoCod[index ++] + textoCod[index ++] + textoCod[index ++]
                l = 'u';
                break;
            default:
                break;
        }
        textoDescodificado += l;
    }   

    let campo = document.getElementById('res')
    campo.innerHTML = textoDescodificado;

    document.getElementById("apresentacao__retorno__telaInicial").style.display = "none";
    document.getElementById("copy").style.display = "inline";
    
}

function copiarTexto() {
    let copyText = document.querySelector("#res");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);