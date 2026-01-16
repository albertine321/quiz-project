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


// Dette velger et tilfeldig spørsmål.
let randNumber = Math.floor(Math.random() * sporsmal.questions.length); // Math.floor() runder ned til nærmeste heltall. Math.random() gir et tilfeldig tall mellom 0 og 1.
let currentQuestion = sporsmal.questions[randNumber]; // Går inn på sporsmal og deretter questions for å hente et tilfeldig spørsmål ved hjelp av randNumber og lagrer det i variabelen currentQuestion.


// Viser spørsmålet i HTML-siden
document.getElementById("tittel").textContent = currentQuestion.question;


// Viser knappene og kobler til knapper fra HTML
let knappContainer = document.getElementById("knapper"); //lager variabel for knappene i HTML
knappContainer.innerHTML = ""; // Tømmer knappContainer for tidligere knapper (hvis noen)


// Går gjennom alle svaralternativene i currentQuestion
currentQuestion.options.forEach((option, index) => {// forEach går gjennom alle svaralternativene (f.eks. “Oslo”, “Bergen”, “Trondheim”, “Stavanger”) i currentQuestion.options.
    let nyBtn = document.createElement("button"); // For hvert alternativ lages en ny <button>.
    nyBtn.className = "alternativ"; // Setter klassen til alternativ for styling i css.
    nyBtn.textContent = option; // Setter knappens tekst til navnet på alternativet med textContent (f.eks. “Oslo”).
    knappContainer.appendChild(nyBtn); //appendChild legger knappen inn i HTML-en (i #knapper-boksen).


// Når du klikker på en knapp, aktiveres denne funksjonen.
    nyBtn.addEventListener("click", () => { // Legger til en "click"-eventListener på hver knapp.
        let riktigIndex = currentQuestion.answer; // riktigIndex henter den riktige svarposisjonen fra spørsmålet som da heter answer. For eksempel hvis answer = 2, betyr det at tredje alternativet er riktig (fordi vi teller fra 0).
        if (index === riktigIndex) { //Hvis brukeren klikker på det riktige alternativet, legger vi til CSS-klassen correct (som gjør knappen grønn).
            nyBtn.classList.add("correct");
        } else {
            nyBtn.classList.add("wrong"); // Hvis brukeren klikker på feil alternativ blir den klikkede knappen får wrong (blir rød).
            knappContainer.children[riktigIndex].classList.add("correct"); // Den riktige knappen markeres også med correct (blir grønn), slik at brukeren ser riktig svar.
        }

// Deaktiver alle knapper etter at man har valgt en knapp
        Array.from(knappContainer.children).forEach(btn => btn.disabled = true);
    });
});