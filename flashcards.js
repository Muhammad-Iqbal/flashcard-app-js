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
  storeCards()
}

numCardsOut = () => {
   document.getElementById('numCards').innerHTML = cards.length;
};

clearUI = () => {
  document.getElementById('front').value = '';
  document.getElementById('back').value = '';
};


storeCards = () => {
  let serializedCards =  JSON.stringify(cards);
  localforage.setItem('flashcards',serializedCards).then(() =>{
    return localforage.getItem('key')
  }).then(() =>{
    alert('saved')
  }).catch(err =>{
    console.log('Error',err)
  })
}
