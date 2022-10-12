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
const carouselInner = document.querySelector('.slider>.carousel-inner');

//utilizzo il ciclo for pr stampare le immagini
let activeImage= 0
console.log(activeImage); 
for (i=0; i < immaginiCarosello.length; i++ ){
    const immagine = immaginiCarosello [i];
    console.log(immagine);
    //inserisco le varie immagini nel carousel-inner
    //aggiungo la classe active in posizione 0
    const carouselItem = `<div class="${i===activeImage ? 'active' : ''} carousel-item"><img src=${immagine}></div>`;
    console.log(carouselItem);
    carouselInner.insertAdjacentHTML("beforeend", carouselItem);

}

//funzione per il click del next
const buttonNext = document.querySelector('.next')
buttonNext.addEventListener("click", function(){
    console.log('next')
    const currentActive = document.querySelector("div.active")
    console.log(currentActive)

    currentActive.classList.remove('active')

    activeImage++

    const nextImg = document.querySelector()
    console.log(nextImg)
    nextImg.classList.add('active')

})