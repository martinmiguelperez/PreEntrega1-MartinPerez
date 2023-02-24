let continuar = true
const IVA = 1.21
const INTERES = 1.07
const DESCUENTO = 0.10

let mensajeLicenciatipoA = "Usted posee licencia de conducir tipo 'A' \n" +
    "(Escribe SI o NO)"

let mensajeSelecMotocicleta = "Seleccione la motocicleta \n" +
    "\n" +
    "1. Peugeot Tweet | 125cc \n" +
    "2. Askoll eS 2 | 50cc \n" +
    "3. Yamaha Tricity | 125cc \n" +
    "4. Yamaha XMAX | 300cc \n" +
    "\n" +
    "Ingrese el numero de la motocicleta"

let mensajeFormaPago = "Elija la forma de pago \n" +
    "\n" +
    "1. Contado \n" +
    "2. 5 Cuotas (SIN INTERES)\n" +
    "3. 12 Cuotas (7% DE INTERES)\n" +
    "\n" +
    "Ingrese el Nro. de la financiacion que desea"


function inicioDeProceso() {

    LicenciaTipoA = prompt(mensajeLicenciatipoA).toLocaleLowerCase().trim()

    let seleccionLicencia = ((LicenciaTipoA !== "si"))

    if (seleccionLicencia) {
        console.error("¡Debes tener licencia de conducir tipo 'A'! No puede continuar ")
        return
    }

    tipoMotocicleta = parseInt(prompt(mensajeSelecMotocicleta))

    let seleccionValida = ((tipoMotocicleta !== 1) && (tipoMotocicleta !== 2) && (tipoMotocicleta !== 3) && (tipoMotocicleta !== 4))

    if (seleccionValida) {
        alert("Ingresa una opción válida, por favor.")
        return
    }

    let subtotal = 0
    switch (tipoMotocicleta) {
        case 1:
            subtotal = 1400 * IVA
            break;

        case 2:
            subtotal = 1100 * IVA
            break;

        case 3:
            subtotal = 3200 * IVA
            break;

        case 4:
            subtotal = 4500 * IVA
            break;
        default:
            console.error("Ingresa una opción válida, por favor.")
            break
    }
    alert("El SUBTOTAL es de € " + subtotal.toFixed(2))


    tipoDePago = parseInt(prompt(mensajeFormaPago))

    let seleccionPago = ((tipoDePago !== 1) && (tipoDePago !== 2) && (tipoDePago !== 3))

    if (seleccionPago) {
        alert("Ingresa una opción válida, por favor.")
        return
    }

    switch (tipoDePago) {
        case 1:
            totalContado = subtotal - (subtotal * DESCUENTO)
            alert(" Pagar un TOTAL al contado de: € " + totalContado.toFixed(2) + "\n" + 
                    "Por pago al contado tiene DESCUENTO de: € " + (subtotal * DESCUENTO))
            break;

        case 2:
            totalCincoCuotas = subtotal / 5
            alert("Pagar 5 cuotas de: € " + totalCincoCuotas.toFixed(2) + "\n" + 
                    "Haciendo un TOTAL de: € " + (totalCincoCuotas * 5))
            break;

        case 3:
            totalDoceCuotas = (subtotal / 12) * INTERES
            alert("Pagar 12 cuotas de: € " + totalDoceCuotas.toFixed(2) + "\n" + 
                    "Haciendo un TOTAL de: € " + (totalDoceCuotas * 12))
            break;
        default:
            console.error("Ingresa una opción válida, por favor.")
            break
    }
}

function iniciarCompra() {
    while (continuar) {
        inicioDeProceso()
        continuar = confirm("Quieres iniciar nuevamente el proceso?")
    }
}