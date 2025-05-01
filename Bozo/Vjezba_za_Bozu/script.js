let inputText = document.getElementById("mob");
let buttonClick = document.querySelector("#tipka");
let listaMobitela = document.querySelector("#ekran");

let novaVarijabla = "";

inputText.addEventListener("input", function (event) {
  novaVarijabla = event.target.value;
});

buttonClick.addEventListener("click", function (event) {
  const ListItem = document.createElement("Li");
  ListItem.innerHTML = `tekst bilo koji ${novaVarijabla}`;
  const noviDiv = document.createElement("div");//radi kao delete button
  noviDiv.innerHTML = `delete`;
  noviDiv.classList.add("delete");//dodajemo klasu da bi ga mogli tergetirat za izvuc event listener
  noviDiv.addEventListener("click", function (event) {
    const ListItem = event.target.closest("Li");
    if(event.target.classList.contains("delete"))
    ListItem.remove();
  });


  listaMobitela.appendChild(ListItem);
  ListItem.appendChild(noviDiv);
});

const imena = ["Stipe", "Bozo", "Antonija", "Zorislav", "Lea"];

function pronadjiNajduzeIme(niz){
  for (i=0; i<= niz.length;i++){
    let najDuzaRijec ="";

if (najDuzaRijec <= niz[i])
  najDuzaRijec = niz[i]

}
console.log(najDuzaRijec);
}




