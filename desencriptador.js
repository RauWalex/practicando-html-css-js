/*  << ¡Reglas de Encriptado!>>
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function desencriptarTexto(){
    let textoOriginal = document.getElementById("textoUsuario").innerText;
    let textoDesencriptado="";
    let salida
    let caracter ="";
    while(salida < textoOriginal.length){

        caracter = textoOriginal[salida];

    }
    
    
    for (let i = 0; i < textoOriginal.length; i++) {
        let caracter = textoOriginal[i];

        if (caracter==="a"){
            i++;
            caracter = textoOriginal[i];
            if (caracter==="i"){
                textoDesencriptado +="a"
            }
        }else if(caracter==="e"){
            i++;
            caracter=textoOriginal[i];
                if(caracter==="n"){
                    i++;
                    caracter=textoOriginal[i];
                    if(caracter==="t"){
                        i++;
                        caracter=textoOriginal[i];
                        if (caracter==="e"){
                            i++;
                            caracter=textoOriginal[i];
                            if(caracter==="r"){
                                textoDesencriptado+="e";

                        }
                    }   
                }   
                    
            }
        }else if(caracter==="i"){
            i++;
            caracter=textoOriginal[i];
            if(caracter==="m"){
                i++;
                caracter=textoOriginal[i];
                if (caracter==="e"){
                    i++;
                    caracter=textoOriginal[i];
                    if(caracter==="s"){
                        textoDesencriptado +="i"
                    }
                }
            }

        }else if(caracter==="o"){
            i++;
            caracter=textoOriginal[i];
            if (caracter==="b"){
                i++;
                caracter=textoOriginal[i];
                if(caracter==="e"){
                    i++;
                    caracter=textoOriginal[i];
                    if (caracter==="r") {
                        textoDesencriptado +="o"
                    }
                    
                }
            }
        }else if(caracter==="u"){
            i++;
            caracter=textoOriginal[i];
            if(caracter==="f"){
                i++;
                caracter=textoOriginal[i];
                if(caracter==="a"){
                    i++;
                    caracter=textoOriginal[i];
                    if(caracter==="t"){
                        textoDesencriptado +="u"
                    }
                }
            }

        }else{
            textoDesencriptado+=caracter
        }
        
    }

    //document.getElementById("respuesta").innerText=textoDesencriptado;
    //document.getElementById("muñeco").hidden=true;
    //document.getElementById("m1").hidden=true;
    //document.getElementById("m2").hidden=true;
    return textoDesencriptado;
}