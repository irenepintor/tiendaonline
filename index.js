MetodoDePago = prompt("¿Cómo abonara? ¿Efectivo, Transferencia o Cuotas?")
pago(MetodoDePago)

function pago (MetodoDePago){
    if(MetodoDePago === "Transferencia" || MetodoDePago === "transferencia"){
        console.log("El Total tiene un 10% de Descuento")
    }else if(MetodoDePago === "Efectivo" || MetodoDePago === "efectivo"){
        console.log("El Total tiene un 30% de Descuento")
    }else if(MetodoDePago === "Cuotas" || MetodoDePago === "cuotas"){
        for(let i = 3; i <= 12; i += 3){
            if(i === 3){
                console.log(`Puede hacerlo en ${i} cuotas`)
            }
            else if(i === 6 || i === 9){
                console.log(`en ${i} cuotas`)
            }
            else if(i === 12){
                console.log(`o hasta en ${i} cuotas`)
            }
        }
    }
}