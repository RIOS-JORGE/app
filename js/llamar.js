import { urls } from "./variables.js";
import { nombre } from "./variables.js";
import { boton } from "./variables.js";
import { tabla } from "./variables.js";

import { misDatos } from "./misDatos.js";

let llamar = boton.addEventListener("click", function (e) {
  e.preventDefault();

  fetch(urls)
    .then((response) => response.json())
    .then((ndata) => newurl(ndata))
    .catch((error) => console.log(error));

  let newurl = (ndata) => {
    e.preventDefault();
    let url = ndata[ndata.length - 1].urls;

    fetch(url)
      .then((response) => response.json())
      .then((data) => misDatos(data))
      .catch((error) => console.log(error));
  };
});

export { llamar };
