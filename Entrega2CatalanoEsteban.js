//Entrega 2 - CATALANO, Esteban Ezequiel

let precioTotal = 0
let carrito = []

class ProductoAlimentoBalanceado{
    constructor (id,marca,tipo,precio,stock){
    this.id = id
    this.marca = marca
    this.tipo = tipo
    this.precio = precio
    this.stock = stock}
}

const alim1 = new ProductoAlimentoBalanceado(001, "Basico", "Perritos pancitas llenas por 5 KG c/u de alimento", 3000, 25)
const alim2 = new ProductoAlimentoBalanceado(002,"Super", "Perritos fit por 3 KG c/u de alimento" ,4000, 25)
const alim3 = new ProductoAlimentoBalanceado(003, "Premium Plus", "Perro endemoniado por 3 KG c/u de alimento" ,5000, 25)
const alim4 = new ProductoAlimentoBalanceado(004, "Ultra", "Perro Feroz por 8 KG c/u de alimento" ,9000, 25)

const Alimentos = [alim1,alim2,alim3,alim4] 

const tipos = Alimentos.map((el) => el.tipo )
    
while(true){

let productos = Number(prompt("Elija un producto, estos son los tipos disponibles: " +
    "\n1) " + tipos[0] + "\n2) " + tipos[1] + "\n3) " + tipos[2] + "\n4) " + tipos[3] ))


if(productos>4){alert("Ese Numero de producto no esta disponlibe, seleccione otro")
continue}
    
if(productos == 1){stock = alim1.stock}
if(productos == 2){stock = alim2.stock}
if(productos == 3){stock = alim3.stock}
if(productos == 4){stock = alim4.stock}

let cantidad = Number(prompt("Cuantos quiere comprar? " + "(" + stock + " Unidades Disponibles)"))
    
if(productos == 1){alim1.stock = alim1.stock - cantidad}
if(productos == 2){alim2.stock = alim2.stock - cantidad}
if(productos == 3){alim3.stock = alim3.stock - cantidad}
if(productos == 4){alim4.stock = alim4.stock - cantidad}
    
    function cuenta(tipo,precio,cantidad){
            precioTotal = precioTotal+(precio*cantidad)
            alert("Se agregaron " + cantidad + " " + tipo + " a su carrito de compras")
        
            carrito.push (cantidad + " " + tipo + ",")
    }
    
if (stock===0){alert("no hay mas unidades disponibles de este producto")}
else if (cantidad > stock){alert("A ingresado una cantidad de unidades mayor al limite disponible")}
else{
switch(productos){
    case 1:cuenta (alim1.tipo, alim1.precio,cantidad)
    break;
    case 2:cuenta (alim2.tipo,alim2.precio,cantidad)
    break;
    case 3:cuenta (alim3.tipo,alim3.precio,cantidad)
    break;
    case 4:cuenta (alim4.tipo,alim4.precio,cantidad)
    break;
}
}
    
    respuesta = prompt("Desea comprar algo mas ( si / no )")
        if(respuesta== "no" || respuesta== "no"){
        break}
    }
    
    alert("Usted compro: "+ carrito + " de alimento ")
    alert("Tiene que pagar " + precioTotal + "$")  

let productoCompra = parseInt(prompt("Desea agregar algo mas? Elija tipo de suplemento:\n1) Oxido nitrico perruno \n2) Huesos fuertes \n3) no "))

if(productoCompra == 1){
    console.log("Estos son los tipos disponibles " + Alimentos)}