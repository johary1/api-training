// XMLHttpRequest ancienne methode

function reqListener() {
  // console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open('get', 'data.txt', true);
//req.open('get', 'data.json', true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//-----------
//FETCH
//-----------
//theorie fetch
/*
fetch("monlien", "objet d'option")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
*/

fetch("data.txt").then((res) => res.text().then((data) => console.log(data)));
fetch("data.json").then((res) => res.json().then((data) => console.log(data)));
const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
fetch("data.json", init).then((res) => console.log(res));
// CRUD => Create(POST), Read(GET), Update(PUT), Delete(DELETE)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "joe",
    message: "Yo !",
  }),
  mode: "cors",
  credentials: "same-origin",
};
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyé")
  );
});

//Promise
//fetch("monlien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("monlien");
  // await : attend que la fonction avec await soit exécutée avec de faire la suite
  maFonctionExecuteeApresAwait();
}

// écriture en fonction fléchée
const fetchData2 = async () => {
  await fetch("monlien");
  // await : attend que la fonction avec await soit exécutée avec de faire la suite
  maFonctionExecuteeApresAwait();
};

//-----------
//JSON
//-----------
// json() => methode qui s'auto-réseout en renvoyant le Body de la requête

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    //stringify => converti en Json
    let settings = JSON.stringify(data);
    //Parse => transforme Json en objet JS
    //console.log(JSON.parse(settings));
  });

//-----------
//Web API : api du navigateur
//-----------

/*Client storage */
// Local Storage (bcp plus performant que les cookies)
localStorage.data = "Je stocke la data";
//document.body.textContent = localStorage.data;
//localStorage.removeItem(data);
const obj = {
  name: "Denis",
  age: 23,
};
// il faut passer des chaines de caractères
//localStorage.user = JSON.stringify(obj);
// convertir en JS
//console.log(JSON.parse(localStorage.user));

// Session Storage durée le temps de la session
//sessionStorage.dataSettings = "55px";
//sessionStorage.clear();

//------------------
//Cookies
document.cookie = "usename=Jo";
//Bonne pratique
document.cookie = "pseudo=jojo; path=/; max-age=450000; secure; samesite";
