import dogs from "./dogs.json";

const table = document.getElementById("table");

function drawTable(dogs_data) {
  if (table.firstChild) {
    table.removeChild(table.lastChild);
  }

  dogs_data.forEach(dog => {
    table.innerHTML += `
      <tr>
        <td>${dog.id}</td>
        <td>${dog.nev}</td>
        <td>${dog.eletkor}</td>
        <td>${dog.fajta}</td>
        <td>${dog.gazda_neve}</td>
      </tr>
    `;
  });
}

drawTable(dogs);


console.log(
  Array.from(dogs).sort((a, b) => a.nev.localeCompare(b.nev)).sort((a, b) => a.eletkor - b.eletkor)
);

console.log(dogs
  .filter((dog) => dog.fajta == "Labrador")
  .map((dog) => `${dog.nev} (${dog.eletkor} éves)`)
);

console.log(dogs
  .filter((dog) => dog.fajta == "Labrador")
  .map((dog) => ({nev: dog.nev, eletkor: dog.eletkor}))
);

console.log(
  dogs.filter((dog) => dog.eletkor > 10).map(dog => `${dog.gazda_neve}`)
);

// Fajta szerint csoportosítva, a kutyák számát. Az eredményt lista helyett objektumban is tárolhatod, ekkor az objektum adattagjai a fajta nevek legyenek.
/*
let fajtak = []

dogs.forEach(dog => {
 if (fajtak.includes({nev: dog.fajta})) {
  fajtak[fajtak.indexOf({nev: dog.fajta})].num++;
 }
 else {
  fajtak.push({nev: dog.fajta, num: 1});
 }
});
console.log(fajtak);

*/
