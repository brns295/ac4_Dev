function validar_form() {
    var nome=formcontato.nome.value;
    var email=formcontato.email.value;
    var mensagem=formcontato.mensagem.value;
    var erro=false

    if (nome==""){
        alert("Campo nome é obrigatório");
        formcontato.nome.focus();
        erro=true;
    }
    
    if (email==""){
        alert("Campo e-mail é obrigatório");
        formcontato.email.focus();
        erro=true;
    }
    
    if (mensagem==""){
        alert("Campo mensagem é obrigatório");
        formcontato.mensagem.focus();
        erro=true;
    }

    if (erro){
        return false
    }else{
        true
    }

    
}