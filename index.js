//Selecteurs 
// document.querySelector("h4").style.background = "yellow";

// click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");



questionContainer.addEventListener("click" ,() => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click',()=>{
    // response.style.visibility("visible");
    response.classList.add("show-response");
    response.style.background = "green";


})
btn2.addEventListener('click',()=>{
    // response.style.visibility("visible");
    response.classList.add("show-response");
    response.style.background = "red";   
    })

    // Mouse Events
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e)=>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown",() => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";

})
window.addEventListener("mouseup",() => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border ="2px solid teal";
})

questionContainer.addEventListener("mouseenter",() => {
    questionContainer.style.background ="rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", ()=> {
    questionContainer.style.background ="pink";
});

response.addEventListener("mouseover",()=> {
    response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------------------
// KeyPress event
const keypressContainer = document.querySelector (".keypress");
const key = document.getElementById("key");
// Insérer Audio

const ring = (key) => {
    const audio = new Audio ();
    audio.src = key + ".mp3";
    audio.play();
}

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;
    if (e.key === "j"){
        keypressContainer.style.background = "pink";
    } else if (e.key ==="h"){
        keypressContainer.style.background = "teal";
    } else {
        keypressContainer.style.background = "red";
    }
    if (e.key ==="z") ring(e.key);
});

// --------------------------------------------------------
// SCroll Event

const nav = document.querySelector("nav");

window.addEventListener ('scroll', () =>{
    console.log(window.scrollY);

    if (window.scrollY > 150)
        nav.style.top = 0;
        else {
            nav.style.top = "-50px";
        }
})

//-------------------------------------------------------
// form Event 
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "" ;
let langage = "" ;



console.log(inputName);
inputName.addEventListener("input", (e)=> {
    pseudo = e.target.value;
    console.log (pseudo);
});

select.addEventListener("input", (e)=> {

langage = e.target.value;
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();


    if (cgv.checked){
        document.querySelector ('form > div').innerHTML = `
         <h3>Pseudo : ${pseudo} </h3>
         <h4>Langage préféré : ${langage} </h4>
        `;
    } else {
        alert ('Veuillez accepter les CGV')
    }
})
//------------------------------------------------------------------------
// Load Event , se charge à la fin une fois que le reste est chargé 
window.addEventListener("load", () =>{
})
//-----------------------------------------------------------------------
// for each 
//const boxes = document.getElementByClassName(".box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box)=> {
    box.addEventListener("click", (e)=>{
        e.target.style.transform = "scale(0.7)";
    })

})
// addEventlistener VS onclick
// document.body.onclick = () => {
//     console.log ("Click !")
// };
// Bubbling 
document.body.addEventListener ("click", () =>{
console.log ("click 1!");
},false);

//usecapture
document.body.addEventListener ("click", () =>{
console.log ("click 2!");    
},true);

//-------------------------------------------------------------------------
// Stop propagation pour éviter qu'un élément en écrase un autre 
questionContainer.addEventListener ("click", (e) => {
    alert ("test");
    e.stopPropagation();
});

// removeEventListener

//--------------------------------------------------------------------------
// BOM 

// console.log(window.innerHeight);
// Ouvrir une nouvelle fenetre =
// window.open ("http://google.com", "cours js", "height=600, width=800")
// Fermer une fenêtre =
// window.close()
// Evènements adossés à Window 
// alert ("hello");
// Rajouter une fenêtre avec oui ou annuler , similaire à alert
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment vous tromper ?");
});

//Prompt pour rajouter une fenêtre champs à remplir et pouvoir le réutiliser par la suite

btn1.addEventListener ("click", () => {
    let answer = prompt ("Entrez votre nom !");
    questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
});
// Timer, compte à rebours 
setTimeout(() => {
    //logique à éxécuter 
    questionContainer.style.borderRadius = "300px" ;
},2000)

let interval = setInterval(() => {
    document.body.innerHTML +=
    `<div class ='box'>
        <h2> Nouvelle Boîte !</h2>
    </div>`
},1000000)

document.body.addEventListener ("click", (e) => {
    //Permet de retirer ce que l'on veut de la page vu que l'on est en body
    e.target.remove();
    clearInterval(interval);
})
// Location du site ou du fichier 
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// Remplacer une page au chargement 
// location.replace ("http://google.fr");

// lors du rafraichissement permet de changer de page 
// window.onload = () => {
//     location.href ="https://google.fr";
//  }
// Navigator
console.log(navigator.userAgent);

// History
// Permet de revenir en arrière 
//window.history.back();
// permet de revenir sur plusieurs pages en arrière
//history.go(-2)

//-------------------------------------------------------------------------------
// Set property
window.addEventListener("mousemove", (e) =>{
    nav.style.setProperty('--x',e.layerX + "px");
    nav.style.setProperty('--y',e.layerY + "px");

})