/* ESERCIZIO 1
         Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
      */

const changeTitle = function (h1, h2) {
  let newTitleH1 = document.getElementById("title").querySelector("h1");
  let newTitleH2 = document.getElementById("title").querySelector("h2");
  newTitleH1.innerText = h1;
  newTitleH2.innerText = h2;
};
changeTitle("SI! PUO! FARE!", "SI PUO FARE ECCOME!!!!");

/* ESERCIZIO 2
             Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
          */

const addClassToTitle = function (className) {
  let newClass = document.getElementById("title").classList.add(className);
};
addClassToTitle("myHeading");
/* ESERCIZIO 3
             Scrivi una funzione che cambi il testo dei p figli di un div
            */

const changePcontent = function (testoP) {
  //   let body = document.body;
  //   for (let i = 0; i < body.children.length; i++) {
  //     if (body.children[i].tagName === "DIV") {
  //       //perché funziona solo con il MAISCUOLO?
  //       let childDiv = body.children[i];
  //       for (let j = 0; j < childDiv.children.length; j++) {
  //         if (childDiv.children[j].tagName === "P") {
  //           //perché funziona solo con il MAISCUOLO?
  //           let childP = childDiv.children[j];
  //           childP.innerText = testoP;
  //         }
  //       }
  //     }
  //   }
  // };

  let changeP = document.body.querySelectorAll("P");
  changeP.forEach((p) => {
    p.innerText = testoP;
  });
};

changePcontent("I paragrafi sono stati cambiati con successo");

/* ESERCIZIO 4
             Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
            */

const changeUrls = function (newURL) {
  let changeURL = document.body.querySelectorAll("a:not(footer a)");
  changeURL.forEach((a) => {
    a.href = newURL;
  });
};

changeUrls("https://www.google.com");

//esperimento mio per vedere su console la differenza tra NodeList e Array
let changeURL = document.body.querySelectorAll("a:not(footer a)");
console.log(changeURL); // nodelist
const tuttiA = Array.from(changeURL);
console.log(tuttiA); // array

/* ESERCIZIO 5
             Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
          */

const addToTheSecond = function (text) {
  let newLi = document.createElement("li");
  let newText = document.createTextNode(text);
  newLi.appendChild(newText);

  let secondList = document.getElementById("secondList");

  secondList.appendChild(newLi);
};
addToTheSecond("4th");
/* ESERCIZIO 6
             Scrivi una funzione che aggiunga un paragrafo al primo div
          */

const addParagraph = function (paragrafo) {
  let primoDiv = document.body.querySelector("div");
  let newP = document.createElement("p");
  newP.innerText = paragrafo; // uguale all'esercizio precedente ma con un passaggio in meno poiché ho usato direttamente ".innerText" per aggiungere il testo

  primoDiv.appendChild(newP);
};
addParagraph("questo è il nuovo paragrafo nel primo DIV");

/* ESERCIZIO 7
             Scrivi una funzione che faccia scomparire la prima lista non ordinata
          */

const hideFirstUl = function () {
  let firstList = document.getElementById("firstList");
  //firstList.style.display = "none";
  firstList.hidden = true; //alternativa (parametro che ho notato dall'inspector)
};
hideFirstUl();

/* ESERCIZIO 8
             Scrivi una funzione che renda verde il background di ogni lista non ordinata
            */

const paintItGreen = function (colore) {
  let allList = document.body.querySelectorAll("ul");
  allList.forEach((background) => {
    background.style.backgroundColor = colore;
  });
};
paintItGreen("green");

/* ESERCIZIO 9
             Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
            */

const makeItClickable = function () {
  let h1 = document.body.querySelector("h1");
  h1.style.cursor = "pointer";
  h1.onclick = function removeLastLetter() {
    let newH1 = Array.from(h1.innerText);
    newH1.pop();
    h1.innerText = newH1.join("");
  };
};

makeItClickable();

/* ESERCIZIO 10
             Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
            */

const revealFooterLink = function () {
  let footer = document.body.querySelector("footer");
  footer.onclick = function showURL() {
    let hrefURL = footer.querySelector("a");
    alert(hrefURL.href);
  };
};
revealFooterLink();

/* ESERCIZIO 11
             Crea una funzione che crei una tabella nell'elemento con id "tableArea".
             La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
          */

const generateTable = function () {
  //   let tableDiv = document.getElementById("tableArea");
  //   let newTable = document.createElement("table");
  //   let newThead = document.createElement("thead");
  //   let newTr = document.createElement("tr");
  //   let newTh1 = document.createElement("th");
  //   newTh1.innerText = "Immagine"
  //   let newTh2 = document.createElement("th");
  //   newTh1.innerText = "Nome Prodotto"
  //   let newTh3 = document.createElement("th");
  //   newTh1.innerText = "Quantità"
  //   let newTh4 = document.createElement("th");
  //   newTh1.innerText = "Prezzo"
};
generateTable();

/* ESERCIZIO 12
             Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
          */

const addRow = function () {};

/* ESERCIZIO 14
            Crea una funzione che nasconda le immagini della tabella quando eseguita
          */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
            Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
          */

const changeColorWithRandom = function () {
  let h2 = document.getElementById("changeMyColor");
  h2.style.cursor = "pointer";
  h2.onclick = function changeColor() {
    const letters = "0123456789ABCDEF"; // range colori esadecimale
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    h2.style.color = color;
  };
};
changeColorWithRandom(); // per dare un random color toccherebbe creare una funzione extra che genera un valore RGB sempre usando Math.floor(Math.Random())
