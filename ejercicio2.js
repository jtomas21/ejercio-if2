/*
1- crear una pag. que reciba moneda tipo bitcoin exclusivamente y el monto
2- si la moneda es bitcoin preguntar si quieren cambiar a dolar o ethereum 
3- imprimir el resultado

datos:
1 bitcoin = 13.54eth
1 bit = 39.685,40
*/

const TIPO_MONEDA_ACEPTADA = "bitcoin";
const TIPO_CAMBIO_ETH = "ethereum";
const TIPO_CAMBIO_DOL = "dolar";
const TIPO_CAMBIO_ETHEREUM = 13.54;
const TIPO_CAMBIO_DOLAR = 39685.40;

let monedaIngresada = prompt("Ingrese el tipo de moneda que quiere cambiar");
let montoIngresado = parseInt ( prompt("Ingrese el monto a cambiar") );
let monedaCambio = prompt ("Ingrese la moneda a la cual quiere hacer el cambio");

if ((monedaIngresada == TIPO_MONEDA_ACEPTADA) && ((monedaACambiar == TIPO_CAMBIO_ETH)||(monedaACambiar==TIPO_CAMBIO_DOL))) {
  document.write ("<h3>Moneda recibida = " +monedaIngresada+ ", Monto recibido = " + montoIngresado + "</h3>");
  if (monedaACambiar == TIPO_CAMBIO_ETH) {
      document.write ("<h3>Moneda cambiada = " + monedaACambiar+ ", Monto Cambiado = " + (montoIngresado*TIPO_CAMBIO_ETH)+"</h3" ); 
  }
  else {
      document.write ("<h3>Moneda cambiada = " + monedaACambiar+ ", Monto Cambiado = " + (montoIngresado*TIPO_CAMBIO_DOL)+"</h3>" ); 
  }
}

else {
    document.write ("Tipo de cambio no aceptado")
}