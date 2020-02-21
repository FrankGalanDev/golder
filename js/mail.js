
//window.addEventListener("load", enviar_formulario)


	
	var formulario = document.forms[0];
	var nombre = formulario.name;
	var apellido = formulario.surname;
	var message = formulario.message;
	var email = formulario.email;
	
	//alert('listen');
	nombre.addEventListener("blur",validar);
	apellido.addEventListener("blur",validar);
	message.addEventListener("blur",validar);
	email.addEventListener("blur",validar);

   // alert(nombre + apellido + message + email);
   formulario.addEventListener("submit", enviar_email);



function validar(e){
	
  
	evento = e||window.event;
	var valorNombre = nombre.value;
	var errorNombre = document.getElementById("errorNombre");
	
    var valorApellido = apellido.value;
	var errorApellido = document.getElementById("errorApellido");

	var valorEmail = email.value;
	var errorEmail = document.getElementById("errorEmail");
	
	
	if( valorNombre == null ||valorNombre.length == 0 || /^\s+$/.test(valorNombre)){
		errorNombre.setAttribute("style","display:block; color:#ff0000; solid #006600; padding:3px 5px;");
		valorNombre.value = "";
	
	}
	else{
		errorNombre.setAttribute("style","display:none;");
	}

    if( valorApellido == null ||valorApellido.length == 0 ||/^\s+$/.test(valorApellido)){
		errorApellido.setAttribute("style","display:block; color:#ff0000; solid #006600; padding:3px 5px;");
		valorApellido.value = "";
	//	alert('hay un error');
	}   
    else{
		errorApellido.setAttribute("style","display:none;");
	}


 }

function nuevoAjax()
{
	
	var xmlhttp=false;
	try
	{
		xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
		try
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			if (!xmlhttp && typeof XMLHttpRequest!='undefined') xmlhttp=new XMLHttpRequest();
		}
	}
	return xmlhttp;
}


function enviar_email()
{
	var formulario = document.forms[0];


		var ajax=nuevoAjax();
		var nombre = formulario.name.value;
	    var apellido = formulario.surname.value;
	    var message = formulario.message.value;
	    var email = formulario.email.value;
    
    	ajax.open("POST","envio.php",true);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("nombre="+nombre+"&apellido="+apellido+"&message="+message+"&email="+email,true);
 
		ajax.onreadystatechange=function()
		{

			if (ajax.readyState ==4)
			{
            // alert(ajax);	
            contenedor = document.getElementById('mensajeEnvio');
            var scs=ajax.responseText.extractScript();    //capturamos los scripts
            contenedor.innerHTML=ajax.responseText;
            scs.evalScript();


			}
			if (ajax.readyState ==0)
			{
             alert(ajax.readyState);	
           


			}
			if (ajax.readyState ==1)
			{
             alert(ajax.readyState);	
            


			}
			if (ajax.readyState ==2)
			{
             alert(ajax.readyState);	
            


			}
			if (ajax.readyState ==3)
			{
             alert(ajax.readyState);	
            
			}
		}

//	alert(ajax);	
//	ajax.send(null);
	





}



