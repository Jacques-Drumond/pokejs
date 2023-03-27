
function getInput() {
  pokemon = document.getElementById("pokeNameInput").value.toLowerCase();
  displayPokemon(pokemon);
  document.getElementById("divForm").style.display = "none"
  document.getElementById("button").disabled = true;
}

class Pokemon {
  constructor() {
    this.sprite = null;
    this.type = null;
  }
}

const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

let pokemon;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const myPokemon = new Pokemon();

function displayPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      myPokemon.sprite = data.sprites.other.dream_world.front_default;
      myPokemon.type = data.types;
      for (let i = 0; i < myPokemon.type.length; i++) {
        const typeElement = document.createElement("h1");
        typeElement.textContent = capitalize(myPokemon.type[i].type.name);
        let color = myPokemon.type[i].type.name;
        typeElement.style.color = colours[color];
        poketypes.appendChild(typeElement);
      }
      image = document.createElement("img");
      pokeimage.appendChild(image);
      image.src = myPokemon.sprite;
      document.getElementById("pokename").textContent = capitalize(pokemon);
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("error").textContent =
        "Could not find that Pokémon";
    });
}


