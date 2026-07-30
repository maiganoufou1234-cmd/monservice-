// ==========================
// MAÏGA SERVICE
// script.js
// ==========================

// Animation des cartes au défilement
const elements = document.querySelectorAll(
".service,.product,.stat,.contact-box"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

elements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .7s ease";

observer.observe(el);

});

// Bouton retour en haut

const backTop=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

// Effet au survol des cartes

document.querySelectorAll(".product").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// Recherche de produits (à activer quand un champ
// <input id="search"> sera ajouté)

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".product").forEach(product=>{

const text=product.innerText.toLowerCase();

product.style.display=text.includes(value)
? "block"
: "none";

});

});

}

console.log("MAÏGA SERVICE chargé avec succès !");