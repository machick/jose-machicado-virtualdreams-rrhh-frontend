const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input');

const expresiones={
    nombre: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,        
    email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    asunto:/^\w+(\s*\w)+$/,
    textarea:/^(\w){2,}\.*/
}


 const validarTextarea=(mensajeIngresado)=>{

    if(expresiones.textarea.test(mensajeIngresado.target.value)){
        errorMensaje.innerHTML=" ";

    }else{
        errorMensaje.innerHTML="Error no se puede enviar este mensaje";

    }   
 }
 document.getElementById('textarea').addEventListener('keyup',validarTextarea);
 document.getElementById('textarea').addEventListener('blur',validarTextarea);


const validarFormulario=(ingresado)=>{

    switch(ingresado.target.name){
        case "nombre":          
                if(expresiones.nombre.test(ingresado.target.value)){                    
                    errorNombre.innerHTML="";
     
                }else{                    
                    errorNombre.innerHTML="Error al ingresar nombre";
     
                }
        break;
        case "email":
            if(expresiones.email.test(ingresado.target.value)){                    
                errorEmail.innerHTML="";
     
            }else{                    
                errorEmail.innerHTML="Error al ingresar email";
     
            }
            break;
            case "asunto":          
                if(expresiones.asunto.test(ingresado.target.value)){                    
                    errorAsunto.innerHTML="";
     
                }else{                    
                    errorAsunto.innerHTML="Error al ingresar asunto";
     
                }                
            break;
    }    
}


inputs.forEach((input) =>{
    
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);

    });

    

    function mostrar(){        
        var nombreIngresado=document.getElementById('nombre').value;
        var asuntoIngresado=document.getElementById('asunto').value;
        var emailIngresado=document.getElementById('email').value;
        var mensajeIngresado=document.getElementById('textarea').value;
        if(expresiones.nombre.test(nombreIngresado) && expresiones.asunto.test(asuntoIngresado) && expresiones.email.test(emailIngresado) && expresiones.textarea.test(mensajeIngresado)){
            document.getElementById('boton').disabled=false;        
        }else{
            document.getElementById('boton').disabled=true;        
        }
    }
    document.getElementById('nombre').addEventListener('keyup',mostrar);
    document.getElementById('nombre').addEventListener('blur',mostrar);
    document.getElementById('email').addEventListener('keyup',mostrar);
    document.getElementById('email').addEventListener('blur',mostrar);
    document.getElementById('asunto').addEventListener('keyup',mostrar);    
    document.getElementById('asunto').addEventListener('blur',mostrar);    
    document.getElementById('textarea').addEventListener('keyup',mostrar);
    document.getElementById('textarea').addEventListener('blur',mostrar);
    