// const MetodoDePago = prompt("¿Cómo abonara? ¿Efectivo, Transferencia o Cuotas?")
// pago(MetodoDePago)

// function pago (MetodoDePago){
//     if(MetodoDePago === "Transferencia" || MetodoDePago === "transferencia"){
//         console.log("El Total tiene un 10% de Descuento")
//     }else if(MetodoDePago === "Efectivo" || MetodoDePago === "efectivo"){
//         console.log("El Total tiene un 30% de Descuento")
//     }else if(MetodoDePago === "Cuotas" || MetodoDePago === "cuotas"){
//         for(let i = 3; i <= 12; i += 3){
//             if(i === 3){
//                 console.log(`Puede hacerlo en ${i} cuotas`)
//             }
//             else if(i === 6 || i === 9){
//                 console.log(`en ${i} cuotas`)
//             }
//             else if(i === 12){
//                 console.log(`o hasta en ${i} cuotas`)
//             }
//         }
//     }
// }

const productos = [
    {nombre: 'Pan Ciabatta Sin Gluten', precio: 280 },
    {nombre: 'Pan de Trigo Sarraceno Sin Gluten', precio: 470 },
    {nombre: 'Pizza Sin Gluten', precio: 900 },
    {nombre: 'Pan de Masa Madre Sin Gluten', precio: 880 },
    {nombre: 'Isla Flotante Sin Gluten', precio: 390 },
    {nombre: 'Lemon Pie Sin Gluten', precio: 2270 },
    {nombre: 'Brownie Sin Gluten', precio: 450 },
    {nombre: 'CheeseCake Sin Gluten', precio: 5180 },
    {nombre: 'Ñoquis Sin Gluten', precio: 780 },
    {nombre: 'Ravioles Sin Gluten', precio: 920 },
    {nombre: 'Cappelletti Sin Gluten', precio: 970 },
]

const total = productos.reduce((acc, el) => acc + el.precio, 0)
console.log(total)

const productos1 = [
    {id: 1, nombre: 'Pan de Trigo Sarraceno Sin Gluten', precio: 470 },
    {id: 2, nombre: 'CheeseCake Sin Gluten', precio: 5180 },
    {id: 3, nombre: 'Cappelletti Sin Gluten', precio: 970 },
]
const buscar = productos1.find(productos1 => productos1.id === 3)
console.log(buscar)

const economico = productos1.filter(productos1 => productos1.precio < 1000)
console.log(economico)