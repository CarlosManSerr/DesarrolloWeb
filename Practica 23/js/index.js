let listaProductos = document.querySelector("#listaProductos");
let listaCategorias = document.querySelector("#listaCategorias");
let carrito = [];
const URL = "http://localhost:3000/productos/";
const UrlCategorias = "https://fakestoreapi.com/products/categories";

fetch(URL)
    .then(response => response.json())
    .then(productosObtenidos => {
        console.log(productosObtenidos);
        listaProductos.innerHTML="";
        productosObtenidos.forEach((producto, indice) => {
            listaProductos.innerHTML += `
            <div class="col-12 col-md-3 py-5">
                <div class="card">
                    <img src="${producto.image}" class="p-3 imagenProducto card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title.slice(0,20)}</h5>
                        <p class="card-text">${producto.description.slice(0,70)}</p>
                        <p class="card-text text-danger">$${producto.price}</p>
                        <a href="#" class="btn btn-primary w-100">Comprar</a>
                    </div>
                </div>
            </div>
            `;
        });
});

fetch(UrlCategorias)
    .then(response => response.json())
    .then(categoriasObtenidas => {
        console.log(categoriasObtenidas);
        listaCategorias.innerHTML="";
        categoriasObtenidas.forEach((categoria, indice) => {
            categoria = categoria.replace("'","");
            listaCategorias.innerHTML += `
            <li class="nav-item">
                <a href="#" onclick="muestraProductos('${categoria}')" class="nav-link">
                    ${categoria.toUpperCase()}
                </a>
            </li>
            `;
        });
});