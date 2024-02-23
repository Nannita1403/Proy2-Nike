import './style.css'
import nikeLogo from '/logo.png'

const zapatillas = [
  {
    id: 1,
    nombre: "Nike V2K Run",

    precio: 119.99,
    img: "./dist/images/01v2k-run-zapatillas-ZzTJRD.png",
    specialType: "Materiales Sostenibles", 
    modelNike: "Run",
    nroColores: "5 colores",
    colores: [ "#F9FAFF", "#8e9297", "#6a665a","#bfd98e","black"],
  },
  {
    id: 2,
    nombre: "Nike Dunk Low",
    precio: 119.99,
    img: "./dist/images/02dunk-low-zapatillas-15mQNw.png",
    specialType: "Superventas", 
    modelNike: "Dunk Low",
    nroColores: "6 colores",
    colores: ["#F9FAFF","#6da4e6", "red",  "green","#6a665a","black"],
  },
  {
    id: 3,
    nombre: "Nike Air Force 1 `07 nature",
    precio: 119.99,
    img: "./dist/images/03air-force-1-07-next-nature-zapatillas-dgr2tk.png",
    specialType: "Superventas",
    modelNike: "Air Force 1",
    nroColores: "5 colores",
    colores: ["#F9FAFF", "#6da4e6", "red","#8e9297", "#6a665a" ],
  },
  {
    id: 4,
    nombre: "Nike Air Max Pulse",
    precio: 79.97,
    img: "./dist/images/04air-max-pulse-zapatillas-lgFPkM.png",
    specialType: "New",
    modelNike: "Run",
    nroColores: "5 colores",
    colores: ["#F9FAFF", "#bfd98e", "#6da4e6", "#8d60bf","#8e9297"],
  },
  {
    id: 5,
    nombre: "Nike Cortez",
    specialType: "Un Clasico Renovado",
    img: "./dist/images/05prop.png",
    precio: 159.99,
    colores: ["#F9FAFF"],
  },
  {
    id: 6,
    nombre: "Nike Air Force 1 `07 Lx",
    precio: 129.99,
    img: "./dist/images/06air-force-1-07-lx-zapatillas-bRRHxR.png",
    specialType: "Superventas",
    modelNike: "Air Force 1",
    nroColores: "1 color",
    colores: ["#F9FAFF"],
  },
  {
    id: 7,
    nombre: "Nike Jordan 1 Low",
    precio: 129.99,
    img: "./dist/images/07air-jordan-1-low-zapatillas-QnthX1.png",
    specialType: "Materiales Sostenibles",
    modelNike: "Air Jordan",
    nroColores: "6 colores",
    colores: [ "#F9FAFF","#6da4e6","red", "#f7b64e", "#8e9297","black"],
  },
  {
    id: 8,
    nombre: "Nike Phoenix Waffle",
    precio: 99.99,
    img: "./dist/images/08phoenix-waffle-zapatillas-DTQ3JT.png",
    specialType: "New",
    modelNike: "Waffle",
    nroColores: "4 colores",
    colores: [ "#F9FAFF","#6da4e6","#bfd98e","#6a665a"],
  },
  {
    id: 9,
    nombre: "Nike Court Legacy Lift",
    precio: 99.27,
    img: "./dist/images/10air-jordan-1-low-se-zapatillas-RRW0nZ.png",
    specialType: "Superventas",
    nroColores: "4 colores",
    modelNike: "Court Legacy",
    colores: ["#F9FAFF", "#f7b64e","#bfd98e","black"],
  },
  {
    id: 10,
    nombre: "Nike Jordan 1 Low SE",
    precio: 119.99,
    img: "./dist/images/11air-max-97-zapatillas-frVmb5.png",
    specialType: "Materiales Sostenibles", 
    modelNike: "Air Jordan",
    nroColores: "3 colores",
    colores: [ "#F9FAFF", "#8e9297","black"],
  },
  {
    id: 12,
    nombre: "Nike Air max 97",
    precio: 94.99,
    img: "./dist/images/12air-jordan-1-mid-zapatillas-CR2SZ7.png",
    specialType: "New", 
    modelNike: "Air Jordan",
    nroColores: "2 colores",
    colores: ["#F9FAFF","black",],
  },
  {
    id: 3,
    nombre: "Air Jordan 1 Mid",
    precio: 159.99,
    img: "./dist/images/03air-force-1-07-next-nature-zapatillas-dgr2tk.png",
    specialType: "Superventas",
    modelNike: "Air Jordan",
    nroColores: "2 colores",
    colores: [   "#F9FAFF", "black", ],
  }
];

const models = [];

let model = "";
let specialType = 0;

const filtrar = () => {
    const filtered = [];

    for (const zapatilla of zapatillas) {
        if (model.includes(zapatilla.modelNike)) {
            filtered.push(zapatilla);
        }
    }
    printZapatillas(filtered)
}

const fillModelos = (zapatillas) => {
    models.splice(0);
    for (const zapatilla of zapatillas) {
        if (!models.includes(zapatilla.modelNike)) {
            models.push(zapatilla.modelNike);
        }
    }
}

fillModelos(zapatillas);
  
const createSelectModel = () => {
    const divFiltros = document.querySelector("#filtros");

    const selectModel = document.createElement("select");

    for (const model of models) {
        const option = document.createElement("option");

        option.value = model;
        option.textContent = model;

        selectModel.appendChild(option);
    }

    divFiltros.appendChild(selectModel);

    selectModel.addEventListener("change", (event) => {
        model = event.target.value;
        filtrar();
    })

}

const printZapatillas = (zapatillas) => {
  const divZapatillas = document.querySelector("#zapatillas");
  divZapatillas.innerHTML = "";

  let colorAnterior = "";

  for (const zapatilla of zapatillas) {
    const divZapatilla = document.createElement("div");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const nombre = document.createElement("h3");
    const nroColores= document.createElement("p");
    const precio = document.createElement("p");
    const specialType = document.createElement("p");
    const divType = document.createElement("div");
    const divColores = document.createElement("div");


    for (const color of zapatilla.colores) {
        const colorHTML = document.createElement("div");

        colorHTML.className = "color";
        colorHTML.style.backgroundColor = color;

        divColores.appendChild(colorHTML);
    
      
    }

    divColores.className = "colores";
    divZapatilla.className = "flex-container";
    divImg.classList.add("imgContainer");
    divType.classList.add("type", "flex-container");
    img.src = zapatilla.img;
    specialType.className = "specialType";
    specialType.textContent = zapatilla.specialType;
    nombre.textContent = zapatilla.nombre;
    nroColores.textContent= zapatilla.nroColores;
    precio.textContent = `${zapatilla.precio} €`;
   

    divZapatilla.appendChild(divColores);
    divZapatilla.appendChild(divImg);
    divImg.appendChild(img);
    divZapatilla.appendChild(specialType);
    divZapatilla.appendChild(nombre);
    divZapatilla.appendChild(nroColores);
    divZapatilla.appendChild(precio);
    divZapatilla.appendChild(divType);
    divZapatillas.appendChild(divZapatilla);
  }
};

printZapatillas(zapatillas);
createSelectModel();