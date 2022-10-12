function primerEjercicio() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido')
    let nombreCompleto = nombre + ' ' + apellido

    return alert('¡Bienvenido ' + nombreCompleto + '!')
}

function segundoEjercicio() {
    let diametro = prompt('Ingrese diametro de un círculo');
    let perimetro = 3.1416 * diametro
    let area = (diametro / 2) * 3.1416

    return alert('El perímetro del círculo es ' + perimetro + ' y su área es ' + area)
}

function tercerEjercicio() {
    alert('Se le solicitará ingresar 4 números')
    let numero1 = parseInt(prompt('Ingrese el primer número'));
    let numero2 = parseInt(prompt('Ingrese el segundo número'));
    let numero3 = parseInt(prompt('Ingrese el tercer número'));
    let numero4 = parseInt(prompt('Ingrese el cuarto número'));

    let suma = numero1 + numero2 + numero3 + numero4
    let promedio = suma / 4
    return alert('La suma de los números es ' + suma + ' y el promedio es ' + promedio)
}

function cuartoEjercicio() {
    let numero1 = parseInt(prompt('Ingrese cuanto gana por hora'));
    let numero2 = parseInt(prompt('Ingrese cantidad de horas que trabaja en el mes'));

    let sueldo = numero1 * numero2
    return alert('El sueldo mensual del empleado es ' + sueldo)
}
function quintoEjercicio() {
    let numero1 = parseInt(prompt('Ingrese cuanto gana por hora'));
    let numero2 = parseInt(prompt('Ingrese cantidad de horas que trabaja en el mes'));
    let numero3 = parseInt(prompt('Ingrese años de antigüedad en la empresa'));

    let sueldo = numero1 * numero2
    let antiguedad = (sueldo / 100) * 15
    let bono = sueldo + antiguedad
    let total = numero3 * bono
    return alert('El sueldo mensual del empleado con bono incluido es ' + total)
}

function sextoEjercicio() {
    let numero1 = parseInt(prompt('Ingrese cuanto gana por hora'));
    let numero2 = parseInt(prompt('Ingrese cantidad de horas que trabaja en el mes'));
    let numero3 = parseInt(prompt('Ingrese años de antigüedad en la empresa'));
    let numero4 = parseInt(prompt('Ingrese cantidad de seguros vendidos'));
    let numero5 = parseInt(prompt('Ingrese el valor del seguro más caro vendido'));

    let sueldo = numero1 * numero2
    let bono1 = (numero5 / 100) * 50
    let bono2 = ((sueldo / 100) * 25) * numero4
    let antiguedad = (sueldo / 100) * 15
    let bono = sueldo + antiguedad
    let total = numero3 * bono
    let suma = bono1 + bono2 + total
    return alert('El sueldo mensual del empleado es ' + suma + '.')
}

function septimoEjercicio() {
    let numero = parseInt(prompt('Ingrese un número'));
    if (numero == 0) {
        alert('El numero ingresado es 0')
    } else if (numero % 2 == 0) {
        alert('El número ingresado es par')
    } else if (numero % 2 != 0) {
        alert('El número ingresado es impar')
    }
}

function octavoEjercicio() {
    let numero = parseInt(prompt('Ingrese un número'));
    if (numero % 3 == 0) {
        alert('El numero ingresado es múltiplo de 3')
    } else {
        alert('El número que se ingresó no es múltiplo de 3')
    }
}

function novenoEjercicio() {
    let letra = prompt('Ingrese una letra')

    switch (letra) {
        case 'a':
            alert('La letra ingresada es una vocal')
            break;
        case 'e':
            alert('La letra ingresada es una vocal')
            break;
        case 'i':
            alert('La letra ingresada es una vocal')
            break;
        case 'o':
            alert('La letra ingresada es una vocal')
            break;
        case 'u':
            alert('La letra ingresada es una vocal')
            break;
        default:
            alert('Debe ingresar solo una letra')
            break;
    }
}

function decimoEjercicio() {
    let numero1 = parseInt(prompt('Ingrese el primer número:'));
    var numero2 = parseInt(prompt('Ingrese el segundo número con una diferencia mínima de 5 dígitos con respecto al anterior'));
    var diferenciaDigitosMayor = numero1 + 5
    var diferenciaDigitosMenor = numero1 - 5

    if (numero2 <= diferenciaDigitosMenor || numero2 >= diferenciaDigitosMayor) {
        var numero3 = parseInt(prompt('Ingrese otro número.'));

        if (numero3 >= numero1 && numero3 <= numero2) {
            if (numero3 % 2 == 0) {
                alert('El tercer número ingresado se encuentra en el rango y es un número par.')
            } else {
                alert('El tercer número ingresado se encuentra en el rango y es un número impar.')
            }
        } else {
            if (numero3 % 2 == 1) {
                alert('El tercer número ingresado no se encuentra en el rango y es un número impar.')
            } else {
                alert('El tercer número ingresado no se encuentra en el rango y es un número par.')
            }
        }

    } else {
        numero2 = parseInt(prompt('El segundo número ingresado no tiene una diferencia mínima de 5 dígitos con respecto al primer número. Por favor, vuelva a ingresar.'));

        var numero3 = parseInt(prompt('Ingrese otro número.'));

        if (numero3 >= numero1 && numero3 <= numero2) {
            if (numero3 % 2 == 0) {
                alert('El tercer número ingresado se encuentra en el rango y es un número par.')
            } else {
                alert('El tercer número ingresado se encuentra en el rango y es un número impar.')
            }
        } else {
            if (numero3 % 2 == 1) {
                alert('El tercer número ingresado no se encuentra en el rango y es un número impar.')
            } else {
                alert('El tercer número ingresado no se encuentra en el rango y es un número par.')
            }
        }
    }
}

function onceEjercicio() {
    let numero1 = parseInt(prompt('Ingrese un número:'));
    let numero2 = parseInt(prompt('Ingrese otro número.'));
    let operador = prompt('Ingrese un operador (+, -, *, /).')

    switch (operador) {
        case '+':
            alert('El resultado de la operación es: '+(numero1 + numero2))
        break;
        case '-':
            alert('El resultado de la operación es: '+(numero1 - numero2))
        break;
        case '*':
            alert('El resultado de la operación es: '+(numero1 * numero2))
        break;
        case '/':
            alert('El resultado de la operación es: '+(numero1 / numero2))
        break;
        default:
            alert('El operador ingresado no es válido')
        break;
    }
}

function doceEjercicio() {
    let numero1 = parseInt(prompt('Ingrese la medida del primer lado de un triángulo'));
    let numero2 = parseInt(prompt('Ingrese la medida del segundo lado de un triángulo'));
    let numero3 = parseInt(prompt('Ingrese la medida del tercer lado de un triángulo'));

    if (numero1 == numero2 && numero1 == numero3 && numero2==numero3) {
       alert('El triángulo es equilátero.')
    }else if(numero1 != numero2 && numero1 != numero3 && numero2!=numero3){
        alert('El triángulo es escaleno')
    }else{
        alert('El triángulo es isósceles')
    }
}

function treceEjercicio() {
    let categoria = parseInt(prompt('Ingrese la categoría a la que pertenece --> categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000'));
    
    if (categoria != 1 && categoria != 2 && categoria != 3 ) {
        categoria = parseInt(prompt('El número que ingresó es incorrecto. Ingrese nuevamente la categoría a la que pertenece --> categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000'));
        let horas = parseInt(prompt('Ingrese la cantidad de horas extras.'));
        let sueldo
        switch (categoria) {
            case 1:
                if (horas > 20) {
                    sueldo = 2000 + 500
                }
                break;
                case 2:
                    sueldo =3000
                
                break;
            case 3:
                if (horas > 30) {
                    sueldo = 4000 + 1000
                }
                break;
            default:
                break;
        }
    
        if (sueldo > 4000) {
            alert('El sueldo mensual del empleado es mayor a u$s 4000')
        }else{
            alert('El sueldo mensual del empleado es menor a u$s 4000')
        }
    }else{
        let horas = parseInt(prompt('Ingrese la cantidad de horas extras.'));
    let sueldo
    switch (categoria) {
        case 1:
            if (horas > 20) {
                sueldo = 2000 + 500
            }
            break;
            case 2:
                sueldo =3000
            
            break;
        case 3:
            if (horas > 30) {
                sueldo = 4000 + 1000
            }
            break;
        default:
            break;
    }

    if (sueldo > 4000) {
        alert('El sueldo mensual del empleado es mayor a u$s 4000')
    }else{
        alert('El sueldo mensual del empleado es menor a u$s 4000')
    }
    }
}
