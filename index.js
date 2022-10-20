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
        
    }
    generateCards(){
        let A = 1
        let Two = 2
        let Three = 3
        let Four = 4
        let Five = 5
        let Six = 6
        let Seven = 7
        let Eight = 8
        let Nine = 9
        let Ten = 10
        let Jack = 11
        let Queen = 12
        let King = 13
        let diamond = "diamond"
        let clover = "clover"
        let hearts = "hearts"
        let spade = "spade"
        let rank = [A, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King];
        let suit = [diamond, clover, hearts, spade];

        for(let s of suit){
            for(let r of rank){
                this.arrayOfCards.push(`rank:${r} suit:${s}`)
            }
        }
    }
    shuffleCards() {
        let shuffledDeck = []
        // const deck = this.arrayOfCards
        let m = this.arrayOfCards.length;
        let i;
        while (m){
            i = Math.floor(Math.random() * m--) ;
            shuffledDeck.push(this.arrayOfCards[i])
        }  
    this.arrayOfCards = shuffledDeck
    }
    draw() {
        let fieldArray = []
        for (let i=0; i<1; i++) {
        fieldArray.push(this.arrayOfCards[i])
        this.arrayOfCards.shift()
        console.log(fieldArray)
    } } 
    
} 




const d = new Deck();
d.generateCards();
// console.log(d.arrayOfCards);
d.shuffleCards()
console.log(d.arrayOfCards)
d.draw()
console.log(d.arrayOfCards)