
const btnSubmit = document.getElementById('submitButton');
const email     = document.getElementById('emailAddress');
const message   = document.getElementById('message');
const name      = document.getElementById('name');


btnSubmit.addEventListener('click', async (e) => {
    e.preventDefault();

    const emailPattern =(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    if (!emailPattern.test(email.value)) {
        Swal.fire({
        title: "Correo electronico invalido",
        text: "Ingrese un correo valido",
        icon: "error",
        confirmButtonText:'Aceptar'
        });
        return;
    }

    if(name.value == "" || message.value == ""){
        Swal.fire({
            title: "Todos los campos son requeridos",
            icon: "error",
            confirmButtonText:'Aceptar'
            });
        return;
    }


    
    const options = {

        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
         message: `
         Enviado por ${name.value}
         Mensaje enviado desde ${email.value}
         Mensaje: ${message.value}`,
        })
    }

    const submitResponse = await fetch('https://www.amcgestiondelriesgo.com.co/sendmail.php',options);
    const {ok}         = await submitResponse.json();

    if(ok){
        Swal.fire({
            title: "El mensaje fue enviado exitosamente",
            icon: "success",
            confirmButtonText:'Aceptar'
            });

           document.getElementById('contactForm').reset();
    }


})




window.onscroll = function (){ scrollfunction() }

const scrollfunction = () => {

    const btnUp = document.getElementById('btnUp');
    if (document.documentElement.scrollTop > 20 
        || document.body.scrollTop > 20){
          btnUp.style.display = 'flex'
    }else{
        btnUp.style.display = 'none'
        
    }

}