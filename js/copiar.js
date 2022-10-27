import { tabla } from "/variables.js";

let copiar = tabla.addEventListener("dblclick", function (id_elemento) {
  id_elemento.preventDefault();
  console.log(id_elemento.target.textContent);

  if (id_elemento.target.id == "st") {
    let aux = document.createElement("input");
    aux.setAttribute("value", id_elemento.target.textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    window.open(
      "http://www.portalveolia.com.ar/AppArchibus2/app/home.php#MPST"
    );
  } else if (id_elemento.target.id == "ot") {
    let aux = document.createElement("input");
    aux.setAttribute("value", id_elemento.target.textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    window.open(
      "http://www.portalveolia.com.ar/AppArchibus2/app/home.php#MPOT"
    );
  } else if (id_elemento.target.id == "eq") {
    let aux = document.createElement("input");
    aux.setAttribute("value", id_elemento.target.textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    window.open(
      "http://www.portalveolia.com.ar/AppArchibus2/app/home.php#MPEQ"
    );
  }
});

export { copiar };
