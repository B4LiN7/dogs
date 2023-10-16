import dogs from "./dogs.json";

function drawTable(dogs_data) {
  const table = document.getElementById("table");
  while (table.firstChild) {
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

/* ---------------------------------------------------------------------------------------- */

function f1a() {
  return Array.from(dogs).sort((a, b) => a.nev.localeCompare(b.nev)).sort((a, b) => a.eletkor - b.eletkor);
};

function f1bConsole() {
  console.log(dogs
    .filter((dog) => dog.fajta == "Labrador")
    .map((dog) => `${dog.nev} (${dog.eletkor} éves)`)
  );
  
  console.log(dogs
    .filter((dog) => dog.fajta == "Labrador")
    .map((dog) => ({nev: dog.nev, eletkor: dog.eletkor}))
  );
}

function f1b() {
  return dogs.filter((dog) => dog.fajta == "Labrador");ű
};

function f1c() {
  console.log(
    dogs.filter((dog) => dog.eletkor > 10).map(dog => `${dog.gazda_neve}`)
  );
};

// Fajta szerint csoportosítva, a kutyák számát. Az eredményt lista helyett objektumban is tárolhatod, ekkor az objektum adattagjai a fajta nevek legyenek.

function f1d() {
  let fajtak = [];

  dogs.forEach(dog => {
    if (fajtak.some(fajta => fajta.nev == dog.fajta)) {
      let index = fajtak.findIndex(fajta => fajta.nev == dog.fajta);
      fajtak[index].num++;
    }
    else {
      fajtak.push({nev: dog.fajta, num: 1});
    }
  });
  console.log(fajtak);
}

// A kutyák átlagéletkorát. Az összeg kiszámítása egyetlen utasítás legyen. Itt nem listában kell tárolni az eredményt.

function f1e() {
  console.log(
    dogs.reduce((total, next) => total+next.eletkor, 0) / dogs.length
  );
}

/* ---------------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnDogs").addEventListener("click", () => {
    drawTable(dogs);
  });
  document.getElementById("btnF1a").addEventListener("click", () => {
    drawTable(f1a())
  });
  document.getElementById("btnF1b").addEventListener("click", () => {
    drawTable(f1b())
  });
  f1bConsole();
  f1c();
  f1e();
})