const inputInformacija = document.querySelector("#info");
const buttonSubmitInfo = document.querySelector(".submitInfo");
const listaInformacija = document.querySelector(".ListaInformacija");
const form = document.querySelector(".inputContainer");
let informacija = "";

inputInformacija.addEventListener("input", function (event) {
  informacija = event.target.value;
});

//2.nacin
//inputInformacija.addEventListener("input", function(){
//informacija = inputInformacija.value;
//});

//3. nacin bez event listenera
//let informacija = document.querySelector("#info").value;

buttonSubmitInfo.addEventListener("click", function (event) {
  event.preventDefault();
  const newListItem = document.createElement("li");
  const buttonZaBrisanje = document.createElement("button");
  buttonZaBrisanje.classList.add("delete");

  newListItem.innerHTML = `Ovo je tekst od korisnika${informacija}`;
  buttonZaBrisanje.innerHTML = "Obrisi";

  newListItem.appendChild(buttonZaBrisanje);
  listaInformacija.appendChild(newListItem);

  buttonZaBrisanje.addEventListener("click", function (event) {
    const listItem = event.target.closest("li");
    if (event.target.classList.contains("delete")) {
      listItem.remove();
    }
  });

  form.reset();
  informacija = "";
});
