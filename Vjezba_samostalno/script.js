const inputEl = document.getElementById("mjesto-unosa");
const buttonSlanje = document.getElementById("tipka-slanje");
const divBrisanje = document.getElementById("tipka-brisanje-div");
const novaListaPodataka = document.querySelector("neki-div-za-prikaz");

let podaciOdKorisnika = "";

inputEl.addEventListener("input", function (event) {
  podaciOdKorisnika = event.target.value;
});

buttonSlanje.addEventListener("click", function (event) {
  const novaLista = document.createElement("lista");

  const pElement = document.createElement("p");
  const buttonZaBrisanje = document.createElement("button");

  pElement.innerHTML = `Podatci od korisnika: ${podaciOdKorisnika}`;
  buttonZaBrisanje.innerHTML = "Obrisi";

  buttonZaBrisanje.classList.add("buttonZaBrisanje");

  novaLista.appendChild(pElement);
  novaLista.appendChild(buttonZaBrisanje);

  novaListaPodataka.appendChild(novaLista);

  const buttonZaBrisanje2 = docment.querySelector(".button");

  buttonZaBrisanje.addEventListener("click", function (event) {
    const novaLista = event.target.closest("lista");
    if (event.target.classList.contains("buttonZaBrisanje")) {
      novaLista.remove();
    }
  });
});
