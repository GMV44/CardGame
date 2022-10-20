class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }


}

class Hand {
    constructor() {
        this.arrayOfCards = [];
    }
    addCard(card) {
        this.arrayOfCards.push(card)
    }
    playCard(card) {
        // if the card is not in your hand return null, if the card is in your hand return said card
        if(this.arrayOfCards.includes(card)){
            const cardToRemove = this.arrayOfCards.indexOf(card);
                this.arrayOfCards.splice(cardToRemove, 1);
            
        }
    }
}

class Deck {
    constructor() {
        this.arrayOfCards = [];
        this.rank = [1,2,3,4,5,6,7,8,9,10,"J","Q","K"];
        this.suit = ["diamond","spade","clover","hearts"];
        
    }
    generateCards(){
        let rank = [1,2,3,4,5,6,7,8,9,'10',"J","Q","K"];
        let suit = ["diamond","spade","clover","hearts"];

        for(let s of suit){
            for(let r of rank){
                this.arrayOfCards.push(`rank:${r} suit:${s}`)
            }
        }
    }
} 


let newCard = new Card(2, "diamond");
let newCard2 = new Card(3, "diamond");
let hand1 = new Hand();
hand1.addCard(newCard)
hand1.addCard(newCard2)
console.log(hand1.arrayOfCards)
hand1.playCard(newCard2)
console.log(hand1.arrayOfCards)
const d = new Deck();
d.generateCards();
console.log(d.arrayOfCards);

