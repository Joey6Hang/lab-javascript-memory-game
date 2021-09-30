class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards){
      return undefined;
    }
    for (let i = 0; i< this.cards.length ; i++) {
      const lastCard = this.cards.length -1 -i;
      if(lastCard === 1) 
      break;

      const roll = Math.floor(Math.random() * lastCard)
      if (this.cards[lastCard] !== this.cards[roll]){
        const tmp = this.cards[lastCard];
        this.cards[lastCard] = this.cards[roll];
        this.cards[roll] = tmp;
      }
    }
  }

  checkIfPair(card1, card2) {
    if(!this.pairsGuessed){
      return undefined;
    }
    this.pairsClicked ++;
    card1 === card2 ? true : false;
  }

  checkIfFinished() {
    if(this.pairsGuessed != 0){
  return undefined;
    }
    pairsGuessed > 12 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
