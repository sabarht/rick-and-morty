import { createCharacterCard } from "./components/card/card.js";
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

let maxPage;
let page = 1;
let searchQuery = "";
//new code

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);

    pagination.textContent = `${page} / ${maxPage} `;
  }
});
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
    pagination.textContent = `${page} / ${maxPage} `;
  }
});

//searchBar
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();

  const formElements = e.target.elements;
  searchQuery = formElements[0].value;
  page = 1;
  fetchCharacters(page, searchQuery);
});

fetchCharacters(page);
async function fetchCharacters(page) {
  try {
    cardContainer.textContent = "";
    let response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );

    let result = await response.json();
    let info = result.info;
    let characters = result.results;
    maxPage = info.pages;
    pagination.textContent = `${page} / ${maxPage} `;
    characters.forEach((character) => {
      const newCard = createCharacterCard(character);
      cardContainer.append(newCard);
    });
  } catch (error) {
    console.error("Error fetching Data", error);
  }
}
