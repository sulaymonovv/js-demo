let h2 = document.querySelector('.h2')
let tugma = document.querySelector('.button')
let button = document.querySelector('.tugma')

let i = 1;

tugma.onclick = () => {
    h2.innerHTML = i = 0

}

button.onclick = () => {
    h2.innerHTML = i+=1
    if ( i == 100 ){
        alert("siz 100-marta zikir qildingiz")
    }
}
