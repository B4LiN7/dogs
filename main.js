import dogs from "./dogs.json";

// console.log(dogs);

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


