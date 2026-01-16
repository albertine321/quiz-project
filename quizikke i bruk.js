let sporsmal = {
  "title": "Generell kunnskapsquiz (norsk)",
  "language": "no",
  "questions": [

    {
      "id": 0,
      "question": "Hva står forkortelsen 'HTML' for?",
      "options": ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      "answer": 0,
      "explanation": "HTML står for HyperText Markup Language."
    },
    {
      "id": 1,
      "question": "Hva heter hovedstaden i Norge?",
      "options": ["Bergen", "Trondheim", "Oslo", "Stavanger"],
      "answer": 2,
      "explanation": "Oslo er Norges hovedstad."
    },
    {
      "id": 2,
      "question": "Hvilket grunnstoff har kjemisk symbol O?",
      "options": ["Gull", "Oksygen", "Sølv", "Hydrogen"],
      "answer": 1,
      "explanation": "O står for oksygen."
    },
    {
      "id": 3,
      "question": "Hvor mange dager er det i et skuddår?",
      "options": ["365", "366", "364", "360"],
      "answer": 1,
      "explanation": "Et skuddår har 366 dager (én ekstra dag i februar)."
    },
    {
      "id": 4,
      "question": "Hvem skrev 'Et dukkehjem'?",
      "options": ["Henrik Ibsen", "Knut Hamsun", "Sigrid Undset", "Jon Fosse"],
      "answer": 0,
      "explanation": "Henrik Ibsen skrev dramaet 'Et dukkehjem' (1879)."
    },
    {
      "id": 5,
      "question": "Hva er hovedstaden i Frankrike?",
      "options": ["Lyon", "Marseille", "Paris", "Nice"],
      "answer": 2,
      "explanation": "Paris er Frankrikes hovedstad."
    },
    {
      "id": 6,
      "question": "Hvilket tall er primtall?",
      "options": ["21", "25", "29", "27"],
      "answer": 2,
      "explanation": "29 er et primtall (har bare 1 og seg selv som divisorer)."
    },
    {
      "id": 7,
      "question": "Hvilket organ pumper blod rundt i kroppen?",
      "options": ["Lunger", "Hjerte", "Lever", "Nyrer"],
      "answer": 1,
      "explanation": "Hjertet pumper blod gjennom kroppen."
    },
    {
      "id": 8,
      "question": "Hva kalles den største planeten i solsystemet vårt?",
      "options": ["Jorden", "Mars", "Saturn", "Jupiter"],
      "answer": 3,
      "explanation": "Jupiter er den største planeten i solsystemet vårt."
    },
    {
      "id": 9,
      "question": "Hvilket år startet andre verdenskrig (invasjon av Polen)?",
      "options": ["1937", "1939", "1941", "1945"],
      "answer": 1,
      "explanation": "Andre verdenskrig startet i 1939 da Tyskland invaderte Polen."
    },
    {
      "id": 10,
      "question": "Hva heter valutaen i Japan?",
      "options": ["Yen", "Won", "Dollar", "Pund"],
      "answer": 0,
      "explanation": "Japans valuta er yen."
    },
    {
      "id": 11,
      "question": "Hvilken farge får du hvis du blander blått og gult maling?",
      "options": ["Grønn", "Lilla", "Oransje", "Brun"],
      "answer": 0,
      "explanation": "Blått + gult gir grønn (ved pigmentblanding)."
    },
    {
      "id": 12,
      "question": "Hvem malte 'Mona Lisa'?",
      "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      "answer": 2,
      "explanation": "Leonardo da Vinci malte 'Mona Lisa'."
    },
    {
      "id": 13,
      "question": "Hva heter Norges lengste elv (etter volum og kjent lengde)?",
      "options": ["Glomma", "Numedalslågen", "Drammenselva", "Lågen"],
      "answer": 0,
      "explanation": "Glomma er Norges lengste elv."
    },
    {
      "id": 14,
      "question": "Hvilket av følgende er en planet nærmest solen?",
      "options": ["Venus", "Saturn", "Neptun", "Uranus"],
      "answer": 0,
      "explanation": "Venus ligger nærmere solen enn Saturn, Uranus og Neptun (Merk: Merkur ligger enda nærmere)."
    },
  ]
}

randNumber = Math.floor(Math.random() * 14);
console.log(randNumber)
let question = sporsmal["questions"].find(q => q.id === randNumber).question;
console.log(question)
document.getElementById("tittel").textContent = question


let options = sporsmal["questions"].find(o => o.id === randNumber).options;
console.log(options)
/* document.getElementById("alternativ").textContent = options */

for (let i = 0; i < options.length; i++){
    let nybtn = document.createElement("button")
    nybtn.setAttribute("class", "alternativ")
    nybtn.setAttribute("id", `${i}` )

    nybtn.textContent = options[i]
    document.getElementById("knapper").appendChild(nybtn)

    
//     nybtn.onclick = function() {
//         let avgittSvar = i;
        
//         console.log(i)

//         if (document.getElementById("0").id == sporsmal.questions[randNumber].answer) {
//             console.log("riktig 0")
//         }else if(document.getElementById("1").id == sporsmal.questions[randNumber].answer){
//             console.log("riktig 1")
//         }else if(document.getElementById("2").id == sporsmal.questions[randNumber].answer){
//             console.log("riktig 2")
//         }else if(document.getElementById("3").id == sporsmal.questions[randNumber].answer){
//             console.log("riktig 3")
//         }
        
//     }
}

let alternativer = document.getElementsByClassName("alternativ");

for (let i = 0; i < alternativer.length; i++) {
    console.log(alternativer[i].id)

    alternativer[i].addEventListener("click", function(){
        if (alternativer[i].id == sporsmal.questions[randNumber].answer) {
           console.log("riktig svar")
    }

    })

   
    
}



   