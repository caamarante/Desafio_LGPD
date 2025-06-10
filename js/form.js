
//class contato

class contato {
    constructor(nome,sobrenome,email,cpf,telefone,contato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
    
            if (data.nome != "" ) {
                alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
            }
}

document.getElementById("enviar_forms").disabled = true;

function TermoAceite(){
    let checkAceite = document.getElementById("termo_aceite");
    let elemento = document.getElementById('enviar_forms');
    if (checkAceite.checked){
        elemento.classList.remove('botao_desabilitado');
        document.getElementById("enviar_forms").disabled = false;
    }
    else{
        elemento.classList.add('botao_desabilitado');
        document.getElementById("enviar_forms").disabled = true;
    }
}
