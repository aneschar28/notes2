
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
