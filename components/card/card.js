export function createCharacterCard(characters) {
  const newCard = document.createElement("ul");
  newCard.classList.add("card-container");
  newCard.innerHTML = `<li class="card">
  <div class="card__image-container">
    <img class="card__image" src=${characters.image} alt=" " />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${characters.name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${characters.status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${characters.type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${characters.episode.length}</dd>
    </dl>
  </div>
</li>`;
  return newCard;
  // const main = document.querySelector('[data-js="main"]');
  // main.append(newCard);
}
