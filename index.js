// import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

//new code
async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const result = await response.json();
  const info = result.info;
  const characters = result.results;
  console.log(characters);
  characters.forEach((character) => {
    createCharacterCard(character);
  });
}
fetchCharacters();
