
let nombre = prompt("ingrese su nombre")

switch (nombre) {
    case "fernando":
        alert("Hola_" +nombre)
        const clavefer= "as3456"
        contraseña = prompt("ingrese Password")
            if (contraseña==clavefer)
                alert("Bienvenido_" +nombre) 
            else{
                alert("Lo lamento contraseña incorrecta")
            }

    break;       
    case "daniel":
        alert("Hola_" + nombre)
        const clavedani= "as3467"
        contraseña = prompt("ingrese Password")
            if (contraseña==clavedani)
                alert("Bienvenido_" +nombre)
            else{
                alert("Lo lamento contraseña incorrecta")
        }
    break;
    case "carlos":
        alert("Hola_" + nombre)
        const clavecar= "as3478"
        contraseña = prompt("ingrese Password")
            if (contraseña==clavecar)
                alert("Bienvenido_" +nombre)
            else{
                alert("Lo lamento contraseña incorrecta")
        }

    break;
    

    default:
                alert("Usuario no registrado")
        break;
}
let activa1=  prompt(nombre +"_ingresa el valor de potencia activa mas alto")
let activa2=  prompt(nombre +"_ingrese el valor de potencia activa mas bajo")
let reactiva1=  prompt(nombre +"_ingrese el valor de potencia reactiva mas alto")
let reactiva2=  prompt(nombre +"_ingrese el valor de potencia reactiva mas bajo")
activa=activa1-activa2
reactiva=reactiva1-reactiva2
cosdephi= (activa) / Math.sqrt(((activa*activa)+(reactiva*reactiva)))
    alert(nombre + "_el  cos de Phi es_ " + cosdephi)