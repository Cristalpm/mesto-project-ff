// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image')
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener("click" , () => deleteCard(cardElement));
    return cardElement;
}

// @todo: Функция удаления карточки
const delCard = function (cardElement) {
    cardElement.remove();
};


// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
    placesList.append(addCard(element.name, element.link, delCard));
});