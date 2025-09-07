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
let via;
let number;
let name;
let order;
let inquiry;
let actionTaken;
let cex;
let reason;
let other;

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
  document.getElementById("botones").innerHTML = `<button id="copy">copy</button>`;

  via = formData.get("via");
  number = formData.get("number");
  name = formData.get("name");
  order = formData.get("order");
  inquiry = formData.get("inquiry");
  actionTaken = formData.get("actionTaken");
  cex = formData.get("cex");
  reason = formData.get("reason");
  other = formData.get("other");

  document.getElementById("copy").addEventListener("click", function () {
    const texto = document.getElementById("output").textContent;
    navigator.clipboard.writeText(texto).catch(err => console.error("Error al copiar: ", err));

    document.getElementById("output").className = "output";
    setTimeout(() => document.getElementById("output").className = "", 500);

    let fields = [
      { value: via, name: "via" },
      { value: number, name: "number" },
      { value: name, name: "name" },
      { value: order, name: "order" },
      { value: inquiry, name: "inquiry" },
      { value: actionTaken, name: "actionTaken" },
      { value: cex, name: "cex" },
      { value: reason, name: "reason" }
    ];

    fields.forEach(field => {
      if (field.value) {
        let fieldElement = document.querySelector(
          `input[name="${field.name}"], textarea[name="${field.name}"], select[name="${field.name}"]`
        );
        if (fieldElement) {
          if (fieldElement.className.includes("missing")) {
            fieldElement.classList.remove("missing");
          }
        } else {
          console.warn(`No se encontró el campo con name="${field.name}"`);
        }
      }
    });

    fields.forEach(field => {
      if (!field.value) {
        let fieldElement = document.querySelector(
          `input[name="${field.name}"], textarea[name="${field.name}"], select[name="${field.name}"]`
        );
        if (fieldElement) {
          fieldElement.classList.add("missing");
        } else {
          console.warn(`No se encontró el campo con name="${field.name}"`);
        }
      }
    });
  });
});

document.getElementById("clean").addEventListener("click", function (e) {
  e.preventDefault();

  const logForm = document.getElementById("logForm");

  Array.from(logForm.elements).forEach(el => {
    if (el.name !== "via") {
      el.value = "";
    }
  });

  let fields = [
    { value: via, name: "via" },
    { value: number, name: "number" },
    { value: name, name: "name" },
    { value: order, name: "order" },
    { value: inquiry, name: "inquiry" },
    { value: actionTaken, name: "actionTaken" },
    { value: cex, name: "cex" },
    { value: reason, name: "reason" }
  ];

  fields.forEach(field => {
    let fieldElement = document.querySelector(
      `input[name="${field.name}"], textarea[name="${field.name}"], select[name="${field.name}"]`
    );
    if (fieldElement) {
      if (fieldElement.className.includes("missing")) {
        fieldElement.classList.remove("missing");
      }
    }
  });

  memory = document.getElementById("output").textContent;
  document.getElementById("output").textContent = "";
  document.getElementById("botones").innerHTML = `<button id = copy>copy</button><button id = last>last note</button>`;

  document.getElementById("last").addEventListener("click", function () {
    document.getElementById("output").textContent = memory;
    document.querySelector("select[name='via']").value = via;
    document.querySelector("input[name='number']").value = number;
    document.querySelector("input[name='name']").value = name;
    document.querySelector("input[name='order']").value = order;
    document.querySelector("textarea[name='inquiry']").value = inquiry;
    document.querySelector("textarea[name='actionTaken']").value = actionTaken;
    document.querySelector("select[name='cex']").value = cex;
    document.querySelector("select[name='reason']").value = reason;
    document.querySelector("input[name='other']").value = other;
  });

  document.getElementById("copy").addEventListener("click", function () {
    const texto = document.getElementById("output").textContent;
    navigator.clipboard.writeText(texto).catch(err => console.error("Error al copiar: ", err));

    document.getElementById("output").className = "output";
    setTimeout(() => document.getElementById("output").className = "", 500);

    let fields = [
      { value: via, name: "via" },
      { value: number, name: "number" },
      { value: name, name: "name" },
      { value: order, name: "order" },
      { value: inquiry, name: "inquiry" },
      { value: actionTaken, name: "actionTaken" },
      { value: cex, name: "cex" },
      { value: reason, name: "reason" }
    ];

    fields.forEach(field => {
      if (field.value) {
        let fieldElement = document.querySelector(
          `input[name="${field.name}"], textarea[name="${field.name}"], select[name="${field.name}"]`
        );
        if (fieldElement) {
          if (fieldElement.className.includes("missing")) {
            fieldElement.classList.remove("missing");
          }
        } else {
          console.warn(`No se encontró el campo con name="${field.name}"`);
        }
      }
    });

    fields.forEach(field => {
      if (!field.value) {
        let fieldElement = document.querySelector(
          `input[name="${field.name}"], textarea[name="${field.name}"], select[name="${field.name}"]`
        );
        if (fieldElement) {
          fieldElement.classList.add("missing");
        } else {
          console.warn(`No se encontró el campo con name="${field.name}"`);
        }
      }
    });
  });
});

document.getElementById("serch").addEventListener("click", function () {
  document.getElementById("respuesta").innerText = encEstado(
    standardizeName(document.getElementById("abrev").value)
  );
});
