const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input');

const expresiones={
    nombre: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    email:/^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/,
    asunto:/^\w+(\s*\w)+$/,
    textarea:/^\w+(\s*\w)+$/
}


 const validarTextarea=(mensajeIngresado)=>{
    //var estadoMensaje = false;
    if(expresiones.textarea.test(mensajeIngresado.target.value)){
        errorMensaje.innerHTML=" ";
      //  estadoMensaje = true;
    }else{
        errorMensaje.innerHTML="Error no se puede enviar este mensaje";
        //estadoMensaje = false;
    }   
 }
 document.getElementById('textarea').addEventListener('keyup',validarTextarea);
 document.getElementById('textarea').addEventListener('blur',validarTextarea);


const validarFormulario=(ingresado)=>{
//var estadoNombre =false;
//var estadoEmail =false;
//var estadoAsunto=false;
    switch(ingresado.target.name){
        case "nombre":          
                if(expresiones.nombre.test(ingresado.target.value)){                    
                    errorNombre.innerHTML="";
                    //estadoNombre=true;    
                }else{                    
                    errorNombre.innerHTML="Error al ingresar nombre";
                   // estadoNombre=false;
                }
        break;
        case "email":
            if(expresiones.email.test(ingresado.target.value)){                    
                errorEmail.innerHTML="";
                //estadoEmail=true;
            }else{                    
                errorEmail.innerHTML="Error al ingresar email";
                //estadoEmail=false;
            }
            break;
            case "asunto":          
                if(expresiones.asunto.test(ingresado.target.value)){                    
                    errorAsunto.innerHTML="";
                    //estadoAsunto=true;                    
                }else{                    
                    errorAsunto.innerHTML="Error al ingresar asunto";
                    //estadoAsunto=false;
                }                
            break;
    }
    // if(estadoNombre&&estadoAsunto&&estadoEmail&&estadoMensaje){    
    //      console.log(estadoNombre+" nombre");
    //      console.log(estadoEmail+" email");
    //      console.log(estadoMensaje+" mensaje");
    //      console.log(estadoAsunto+" estado");
    //      document.getElementById('boton').disabled=false;
    //  }else{
    //      console.log(estadoNombre+" NO nombre");
    //      console.log(estadoEmail+" NOemail");
    //      console.log(estadoMensaje+" NOmensaje");
    //      console.log(estadoAsunto+" NOAsunto");
    //      document.getElementById('boton').disabled=true;
    //  }
    
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
    