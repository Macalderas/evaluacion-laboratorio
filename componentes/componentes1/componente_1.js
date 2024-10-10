let DOM = document.querySelector("#root");

let componente_1 = document.createElement('div');
componente_1.className = "componente-1";

let titulo = document.createElement('h2');
titulo.textContent = "COMPONENTE 1";
componente_1.appendChild(titulo);

let imagen = document.createElement('div');
imagen.className = "imagen";

componente_1.appendChild(imagen);

let descripcion = document.createElement('p');
descripcion.textContent = "Descripción del componente";
componente_1.appendChild(descripcion);

DOM.appendChild(componente_1);