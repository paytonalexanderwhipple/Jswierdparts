const Greetr = G$("Payton", "Whipple");

const langSelect = document.querySelector("#langSelect");

document.querySelector("#Login").addEventListener("click", updateGreeter);

function updateGreeter() {
  Greetr.setLang(langSelect.value).jQupdate("#greeting", true);
}
