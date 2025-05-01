const inputEl = document.getElementById("#mjesto-unosa");
const buttonSlanje = document.getElementById("#tipka-slanje");
const divBrisanje = document.getElementById("#tipka-brisanje-div");


let podaciOdKorisnika = "";

inputEl.addEventListener("input", function(event){
  podaciOdKorisnika = event.target.value;
});

buttonSlanje.addEventListener("click", function(event){
  const novaLista = document.create("lista");
  const pElement = document.create("p");
  const buttonZaBrisanje = document.create("button");

pElement.innerHTML = `podatci od korisnika ${Podatak korisnika}`;
buttonZaBrisanje.innerHTML = "Obrisi";

buttonZaBrisanje.classList.add("buttonZaBrisanje");


novaLista.appendChild(pElement);
novaLista.appendChild(buttonZaBrisanje);


novaListaPodataka.appendChild(novaLista);

const buttonZaBrisanje = docment.querySelector(".button");

buttonZaBrisanje.addEventListener("click", function (event){
  const novaLista = event.target.closest("lista");
  if(event.target.classList.contains("buttonZaBrisanje")){
    novaLista.remove();
  }

});



});



