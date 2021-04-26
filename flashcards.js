document.getElementById('btnSave').addEventListener('click', saveCard);
let cards = new Array();
function saveCard() {
  let front = document.getElementById('front').value;
  let back = document.getElementById('back').value;
  let card = { front: front, back: back };
  cards.push(card);
  console.log(cards);
  clearUI();
  numCardsOut();
}

numCardsOut = () => {
  document.getElementById('numsCards').innerHTML = cards.length;
};

clearUI = () => {
  document.getElementById('front').value = '';
  document.getElementById('back').value = '';
};
