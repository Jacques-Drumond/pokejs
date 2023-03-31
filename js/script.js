const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonSprite = document.querySelector(".pokemon__image");

const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");

const fetchpokemon = async (pokemon) => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  if (APIresponse.status === 200) {
    const jsonData = await APIresponse.json();
    return jsonData;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";
  const data = await fetchpokemon(pokemon);
  if (data) {
    pokemonSprite.style.display = 'block'
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonSprite.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    input.value = "";
  } else {
    pokemonSprite.style.display = 'none'
    pokemonName.innerHTML = "Not found";
  }
  return pokemonNumber.innerHTML;
};

form.addEventListener("submit", () => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

renderPokemon("1");

buttonPrev.addEventListener("click", () => {
  if (pokemonNumber.innerHTML > 1){
    pokemonNumber.innerHTML--;
    renderPokemon(pokemonNumber.innerHTML);
  }
});
buttonNext.addEventListener("click", () => {
  pokemonNumber.innerHTML++;
  renderPokemon(pokemonNumber.innerHTML);
});


