const deck = [
    {
        name: "card dA",
        value: 14
    },
    {
        name: "card dK",
        value: 13
    },
    {
        name: "card dQ",
        value: 12
    },
    {
        name: "card dJ",
        value: 11
    },
    {
        name: "card d10",
        value: 10
    },
    {
        name: "card d9",
        value: 9
    },
    {
        name: "card d8",
        value: 8
    },
    {
        name: "card d7",
        value: 7
    },
    {
        name: "card d6",
        value: 6
    },
    {
        name: "card d5",
        value: 5
    },
    {
        name: "card d4",
        value: 4
    },
    {
        name: "card d3",
        value: 3
    },
    {
        name: "card d2",
        value: 2
    },
    {
        name: "card hA",
        value: 14
    },
    {
        name: "card hK",
        value: 13
    },
    {
        name: "card hQ",
        value: 12
    },
    {
        name: "card hJ",
        value: 11
    },
    {
        name: "card h10",
        value: 10
    },
    {
        name: "card h9",
        value: 9
    },
    {
        name: "card h8",
        value: 8
    },
    {
        name: "card h7",
        value: 7
    },
    {
        name: "card h6",
        value: 6
    },
    {
        name: "card h5",
        value: 5
    },
    {
        name: "card h4",
        value: 4
    },
    {
        name: "card h3",
        value: 3
    },
    {
        name: "card h2",
        value: 2
    },
    {
        name: "card sA",
        value: 14
    },
    {
        name: "card sK",
        value: 13
    },
    {
        name: "card sQ",
        value: 12
    },
    {
        name: "card sJ",
        value: 11
    },
    {
        name: "card s10",
        value: 10
    },
    {
        name: "card s9",
        value: 9
    },
    {
        name: "card s8",
        value: 8
    },
    {
        name: "card s7",
        value: 7
    },
    {
        name: "card s6",
        value: 6
    },
    {
        name: "card s5",
        value: 5
    },
    {
        name: "card s4",
        value: 4
    },
    {
        name: "card s3",
        value: 3
    },
    {
        name: "card s2",
        value: 2
    },
    {
        name: "card cA",
        value: 14
    },
    {
        name: "card cK",
        value: 13
    },
    {
        name: "card cQ",
        value: 12
    },
    {
        name: "card cJ",
        value: 11
    },
    {
        name: "card c10",
        value: 10
    },
    {
        name: "card c9",
        value: 9
    },
    {
        name: "card c8",
        value: 8
    },
    {
        name: "card c7",
        value: 7
    },
    {
        name: "card c6",
        value: 6
    },
    {
        name: "card c5",
        value: 5
    },
    {
        name: "card c4",
        value: 4
    },
    {
        name: "card c3",
        value: 3
    },
    {
        name: "card c2",
        value: 2
    },
]

let shuffledDeck = [];

function shuffleDeck() {
  const tempDeck = deck;
  while (tempDeck.length) {
      const rndIdx = Math.floor(Math.random() * tempDeck.length);
      shuffledDeck.push(tempDeck.splice(rndIdx, 1));
  };
};

console.log(shuffledDeck);