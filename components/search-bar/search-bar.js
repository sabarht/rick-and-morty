import { searchQuery } from "../../index.js";

const searchBar = document.querySelector('[data-js="search-bar"]');

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  console.log(formElements[0].value);
  fetchCharacters(searchQuery);
});
