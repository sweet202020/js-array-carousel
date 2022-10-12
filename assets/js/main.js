//Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

//creo l'array con la lista delle immagini
const immaginiCarosello = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp", 
]
//seleziono la parte in cui voglio metere le mie immagini nella dom
const carouselInner = document.querySelector('.slider>.carousel-inner')

//utilizzo il ciclo for pr stampare le immagini
let activeImage= immaginiCarosello [0]
console.log(activeImage); 
for (i=0; i < immaginiCarosello.length; i++ ){
    const immagine = immaginiCarosello [i];
    console.log(immagine);
    //inserisco le varie immagini nel carousel-inner
    const carouselItem = `<div class="carousel-item"><img src=${immagine}></div>`;
    console.log(carouselItem)
    carouselInner.insertAdjacentHTML("beforeend", carouselItem)
}

//aggiungo l'active nella prima immagine
activeImage = document.querySelector(".carousel-item").classList.add('active')

