function standardizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function limpiar(name) {
  return name
    .trim()
    .split(/\s+/)
    .join(' ');
}

const estadosUSA = [
  ["Alabama", "Al"],
  ["Alaska", "Ak"],
  ["Arizona", "Az"],
  ["Arkansas", "Ar"],
  ["California", "Ca"],
  ["Colorado", "Co"],
  ["Connecticut", "Ct"],
  ["Delaware", "De"],
  ["Florida", "Fl"],
  ["Georgia", "Ga"],
  ["Hawai", "Hi"],
  ["Idaho", "Id"],
  ["Illinois", "Il"],
  ["Indiana", "In"],
  ["Iowa", "Ia"],
  ["Kansas", "Ks"],
  ["Kentucky", "Ky"],
  ["Luisiana", "La"],
  ["Maine", "Me"],
  ["Maryland", "Md"],
  ["Massachusetts", "Ma"],
  ["Michigan", "Mi"],
  ["Minnesota", "Mn"],
  ["Misisipi", "Ms"],
  ["Misuri", "Mo"],
  ["Montana", "Mt"],
  ["Nebraska", "Ne"],
  ["Nevada", "Nv"],
  ["Nueva Hampshire", "Nh"],
  ["Nueva Jersey", "Nj"],
  ["Nuevo Mexico", "Nm"],
  ["Nueva York", "Ny"],
  ["Carolina Del Norte", "Nc"],
  ["Dakota Del Norte", "Nd"],
  ["Ohio", "Oh"],
  ["Oklahoma", "Ok"],
  ["Oregon", "Or"],
  ["Pensilvania", "Pa"],
  ["Rhode Island", "Ri"],
  ["Carolina Del Sur", "Sc"],
  ["Dakota Del Sur", "Sd"],
  ["Tennessee", "Tn"],
  ["Texas", "Tx"],
  ["Utah", "Ut"],
  ["Vermont", "Vt"],
  ["Virginia", "Va"],
  ["Washington", "Wa"],
  ["Virginia Occidental", "Wv"],
  ["Wisconsin", "Wi"],
  ["Wyoming", "Wy"],
  ["Puerto Rico", "Pr"],
  ["Made-by", "AndresChavarria&zendeskColombiateam"]
];

let memory;

function encEstado(estado) {
  for (array of estadosUSA) {
    if (array[1] === estado) {
      return array[0];
    }
    if (array[0] === estado) {
      return array[1];
    }
  }
  return "no data";
}

document.getElementById("logForm").addEventListener("input", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const log = `CONTACT VIA: ${limpiar(formData.get("via") + " " + "#" + " " + formData.get("number"))} //// NAME: ${standardizeName(formData.get("name"))} //// ORDER: ${limpiar(formData.get("order"))} //// INQUIRY: ${limpiar(formData.get("inquiry"))} //// ACTION TAKEN: ${limpiar(formData.get("actionTaken"))} //// CEX: ${limpiar(formData.get("cex"))} //// WHY: ${limpiar(formData.get("reason") + " " + formData.get("other"))}`;

  document.getElementById("number").childNodes[0].nodeValue = formData.get("via") + " number";
  document.getElementById("output").textContent = log;
  document.getElementById("botones").innerHTML = `<button id = copy>copy</button>`;

  document.getElementById("copy").addEventListener("click", function () {
    const texto = document.getElementById("output").textContent;
    navigator.clipboard.writeText(texto).catch(err => console.error("Error al copiar: ", err));
    document.getElementById("output").className = "output"
    setTimeout(() => document.getElementById("output").className = "", 500);
  });
});

document.getElementById("clean").addEventListener("click", function (e) {
  e.preventDefault();

  const logForm = document.getElementById("logForm");
  console.log(logForm);

  Array.from(logForm.elements).forEach(el => {
    if (el.name !== "via") {
      el.value = "";
    }
  });

  memory = document.getElementById("output").textContent;
  document.getElementById("output").textContent = "";
  document.getElementById("botones").innerHTML = `<button id = copy>copy</button><button id = last>last note</button>`;

  document.getElementById("last").addEventListener("click", function () {
    document.getElementById("output").textContent = memory;
  });

  document.getElementById("copy").addEventListener("click", function () {
    const texto = document.getElementById("output").textContent;
    navigator.clipboard.writeText(texto).catch(err => console.error("Error al copiar: ", err));
    document.getElementById("output").className = "output"
    setTimeout(() => document.getElementById("output").className = "", 500);
  });
});

document.getElementById("serch").addEventListener("click", function () {
  document.getElementById("respuesta").innerText = encEstado(standardizeName(document.getElementById("abrev").value));
});
