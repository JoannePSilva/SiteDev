function login(){

    var email = document.getElementById ("email");
    var password = document.getElementById ("senha");

  
        if( email.value == "email@gmail.com" && password.value == "123456") {

            localStorage.setItem("acesso",true);      
          
            window.location.href="index.html";  
                    
        }else{
            alert("Login ou Senha inválidos. Tente novamente.");
        }
       return;
}

          