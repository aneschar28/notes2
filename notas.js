
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
  ["Puerto Rico", "Pr"]
];


function encEstado(estado){

    for(array of estadosUSA){

        if (array[1]===estado){
          return array[0];
        }

        if (array[0]===estado){
          return array[1];
        }
        

    }

    return "no data"

}


document.getElementById("logForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const log = `CONTACT VIA: ${limpiar(formData.get("contactVia"))} //// NAME: ${standardizeName(formData.get("name"))} //// ORDER: ${limpiar(formData.get("order"))} //// INQUIRY: ${limpiar(formData.get("inquiry"))} //// ACTION TAKEN: ${limpiar(formData.get("actionTaken"))} //// CEX: ${limpiar(formData.get("cex"))} //// WHY: ${limpiar(formData.get("reason")+" "+formData.get("other"))}`;

  document.getElementById("output").textContent = log;
});

document.getElementById("clean").addEventListener("click", function (e) {
  e.preventDefault();

  const logForm = document.getElementById("logForm");
  logForm.reset();
  document.getElementById("output").textContent = "";
  
});

document.getElementById("copy").addEventListener("click", function () {
  
    const texto = document.getElementById("output").textContent;
    navigator.clipboard.writeText(texto).catch(err => console.error("Error al copiar: ", err));
  
});

document.getElementById("serch").addEventListener("click", function () {
  
    document.getElementById("respuesta").innerText = encEstado(standardizeName(document.getElementById("abrev").value));

});











