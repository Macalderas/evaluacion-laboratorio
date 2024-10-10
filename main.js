import { componete_1Div } from "./componentes/componentes1/componente_1";

let DOM = document.querySelector("#root");

let componente_1 = document.createElement('section');
componente_1.className = "componente-1";

let componente_1Div = document.createElement('div');
componente_1Div.textContent = "Componente 1";
componente_1Div.className = "componente-div";
componente_1.appendChild(componente_1Div);

DOM.appendChild(componente_1);

let componente_2 = document.createElement('section');
componente_2.className = "componente-2";
let componente_2Div = document.createElement('div');
componente_2Div.textContent = "Componente 2";
componente_2Div.className = "componente-div";
componente_2.appendChild(componente_2Div);
DOM.appendChild(componente_2);

let componente_3 = document.createElement('section');
componente_3.className = "componente-3";
let componente_3Div = document.createElement('div');
componente_3Div.textContent = "Componente 3";
componente_3Div.className = "componente-div";
componente_3.appendChild(componente_3Div);
DOM.appendChild(componente_3);

