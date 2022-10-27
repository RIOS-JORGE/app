import { nombre } from "/variables.js";

let misDatos = (data) => {
  let datos = "";

  let code = nombre.value;

  let arr = [];

  for (var i = 4; i < data.length; i++) {
    arr.push(data[i].IDU);
  }

  if (arr.includes(code.toLowerCase(nombre.value)) && code != "") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].IDU === code.toLowerCase(nombre.value)) {
        datos += `<tr>
              <td>${data[i].ID}</td>  
              <td id='st'>${data[i].ST}</td>
              <td id='ot'>${data[i].OT}</td>
              <td>${data[i].Edificio}</td>
              <td id='eq'>${data[i].Equipo}</td>
              <td>${data[i].Piso}</td>
              <td>${data[i].Sector}</td>
              <td>${data[i].Frecuencia}</td>
            </tr>`;
      }
    }

    document.getElementById("body").innerHTML = datos;

    document.querySelector(".table").setAttribute("style", "display: inherit");

    document
      .querySelector(".divTabla")
      .setAttribute("style", "overflow: scroll");

    document.getElementById("campo").innerHTML = "";
  } else {
    document.getElementById("campo").innerHTML = "ID ERROR";

    document.getElementById("body").innerHTML = "";

    document.querySelector(".table").setAttribute("style", "display: none");

    document.querySelector(".divTabla").setAttribute("style", "overflow: none");
  }
};

export { misDatos };
