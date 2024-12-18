// const botonGuardar = document.querySelector("#guardar")
// const botonMostrar = document.querySelector("#mostrar")
// const botonBorrar = document.querySelector("#borrar")

//EVentO
// botonGuardar.addEventListener("click",() => {
//     const nombre = document.querySelector("#nombre").value
//     localStorage.setItem("nombreUser",nombre)
//     alert("guardado" )

// })

// botonMostrar.addEventListener("click", () => {
//     const nombreGuardado = localStorage.getItem("nombreUser")
//     if (nombreGuardado){
//         document.querySelector("#resultado").textContent = `Guardaste ${nombreGuardado}`
//         alert(`Guardaste ${nombreGuardado}`) 
//     } else{
//         document.querySelector("#resultado").textContent=`no Guardaste`
//         alert(`no guardaste`) 
//     }
// })
    
// botonBorrar.addEventListener("click", () =>{
//     localStorage.removeItem("nombreUser")
//     alert("nombre eliminado del localStore")
//     document.querySelector("#resultado").textContent=""
// })


// Variable global para almacenar los productos en el carrito
let carrito =[];

const agregarAlcarrito = (nombre,precio) => {
    // agregar elproducto como objeto al carrito
    carrito.push({nombre,precio})

    // Actualiza el contador del carrito
    actualizarContador()
    // muestra una alerta de confirmacion
    alert(`agregaste: ${nombre} al carrito`)
}

// funcion para actualizar el carrito
const actualizarContador = () => { 
    // cambiamos el contenido html con el id contador-carrito
    document.getElementById ("contador-carrito").textContent = carrito.length
}

// guarda el contenido del carrito antes de cerrar
window.addEventListener("beforeunload",()=>{
localStorage.setItem("carrito",JSON.stringify(carrito))
});


