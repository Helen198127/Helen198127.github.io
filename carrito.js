// recuperar el carrito del almacenamiento local
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// muestra los productos en el carrito

const mostrarCarrito = ()=> {
    const lista = document.getElementById("lista-carrito")
    lista.innerHTML = "";

    if(carrito.length===0){
        lista.innerHTML= '<p> tu carrito esta vacio</p>'
        return;
    }
    carrito.forEach((items,indice)=>{
        const producto = document.createElement("article")
        producto.classList.add("productos")
        producto.innerHTML=`
        <h2>${items.nombre}</h2>
        <p class= "precio">$${items.precio}</p>
        <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
        `;
        lista.appendChild(producto)
    });
}

// elima el producto del carrito
const eliminarDelCarrito=(indice)=>{
    carrito.splice(indice,1);
    localStorage.setItem("carrito",JSON.stringify(carrito))
    mostrarCarrito(); 
}
// simule la compra
const realizarCompra = ()=>{
    alert("compra realizada con exito")
    localStorage.removeItem("carrito")
    windows.location.href="index.html"
}

// inicializar el carrito al cargar la pagina
mostrarCarrito()