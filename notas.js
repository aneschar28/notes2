
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
  ["alabama", "Al"],
  ["alaska", "Ak"],
  ["arizona", "Az"],
  ["arkansas", "Ar"],
  ["california", "Ca"],
  ["colorado", "Co"],
  ["connecticut", "Ct"],
  ["delaware", "De"],
  ["florida", "Fl"],
  ["georgia", "Ga"],
  ["hawai", "Hi"],
  ["idaho", "Id"],
  ["illinois", "Il"],
  ["indiana", "In"],
  ["iowa", "Ia"],
  ["kansas", "Ks"],
  ["kentucky", "Ky"],
  ["luisiana", "La"],
  ["maine", "Me"],
  ["maryland", "Md"],
  ["massachusetts", "Ma"],
  ["michigan", "Mi"],
  ["minnesota", "Mn"],
  ["misisipi", "Ms"],
  ["misuri", "Mo"],
  ["montana", "Mt"],
  ["nebraska", "Ne"],
  ["nevada", "Nv"],
  ["nueva hampshire", "Nh"],
  ["nueva jersey", "Nj"],
  ["nuevo mexico", "Nm"],
  ["nueva york", "Ny"],
  ["carolina del norte", "Nc"],
  ["dakota del norte", "Nd"],
  ["ohio", "Oh"],
  ["oklahoma", "Ok"],
  ["oregon", "Or"],
  ["pensilvania", "Pa"],
  ["rhode island", "Ri"],
  ["carolina del sur", "Sc"],
  ["dakota del sur", "Sd"],
  ["tennessee", "Tn"],
  ["texas", "Tx"],
  ["utah", "Ut"],
  ["vermont", "Vt"],
  ["virginia", "Va"],
  ["washington", "Wa"],
  ["virginia occidental", "Wv"],
  ["wisconsin", "Wi"],
  ["wyoming", "Wy"],
  ["puerto rico", "Pr"]
];


function encEstado(estado){

    for(array of estadosUSA){

        if (array[1]===estado){
            return array[0];
        }

    }

    return "no data"

}

function encIniciales(abreviacion){

    for(array of estadosUSA){

        if (array[0]===abreviacion){
            return array[1];
        }

    }

    return "no data"

}

document.getElementById("logForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const log = `CONTACT VIA: ${limpiar(formData.get("contactVia"))} //// NAME: ${standardizeName(formData.get("name"))} //// ORDER: ${limpiar(formData.get("order"))} //// INQUIRY: ${limpiar(formData.get("inquiry"))} //// ACTION TAKEN: ${limpiar(formData.get("actionTaken"))} //// CEX: ${limpiar(formData.get("cex"))} //// WHY: ${limpiar(formData.get("reason"))}`;

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




