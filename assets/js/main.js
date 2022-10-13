//creo un array contenente le mie 5 immagini
const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

//seleziono l'elemento della dom dove voglio inserire le mie immagini
const sliderElements= document.querySelector('.slider');
/* console.log(sliderElements) */
//ciclo for per la lista delle immagini
let activeImage=0
for (let i=0; i<images.length; i++){
    image = images[i];
    /* console.log(image); */
    const imgElement = `<img class="${i===activeImage ? 'active' : ''}" src=${image}>`
    sliderElements.insertAdjacentHTML('beforeend', imgElement)
}

//seleziono il bottone dalla dom
const buttonGeneratorNext = document.querySelector ('.next')
/* console.log (buttonGenerator) */
buttonGeneratorNext.addEventListener('click', function(){
    //selezionare l'elemento con la classe active
    const allImages = document.querySelectorAll('.slider > img')
    /* console.log(allImages) */
    /* console.log( allImages[activeImage]) */
    //rimuovere la classe active
    allImages[activeImage].classList.remove('active')
    //incremento activeImage di uno
    activeImage++
    //aggiunco la classe active
    allImages[activeImage].classList.add('active')
})



//seleziono il bottone dalla dom
const buttonGeneratorPrev = document.querySelector ('.prev')
/* console.log (buttonGenerator) */
buttonGeneratorPrev.addEventListener('click', function(){
    //selezionare l'elemento con la classe active
    const allImages = document.querySelectorAll('.slider > img')
    /* console.log(allImages) */
    /* console.log( allImages[activeImage]) */
    //rimuovere la classe active
    allImages[activeImage].classList.remove('active')
    //incremento activeImage di uno
    activeImage--
    //aggiunco la classe active
    allImages[activeImage].classList.add('active')
})
