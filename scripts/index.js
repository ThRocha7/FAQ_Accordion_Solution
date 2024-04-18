const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')

const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')

const img1 = document.querySelector("#btn-info1")
const img2 = document.querySelector("#btn-info2")
const img3 = document.querySelector("#btn-info3")
const img4 = document.querySelector("#btn-info4")

btn1.addEventListener('click', () =>{
    answer1.classList.toggle('show')
    if(img1.src.endsWith('icon-plus.svg')){
        img1.setAttribute("src", "./assets/images/icon-minus.svg")
    }
    else img1.setAttribute("src", "./assets/images/icon-plus.svg")
})

btn2.addEventListener('click', () =>{
    answer2.classList.toggle('show')
    if(img2.src.endsWith('icon-plus.svg')){
        img2.setAttribute("src", "./assets/images/icon-minus.svg")
    }
    else img2.setAttribute("src", "./assets/images/icon-plus.svg")
})

btn3.addEventListener('click', () =>{
    answer3.classList.toggle('show')
    if(img3.src.endsWith('icon-plus.svg')){
        img3.setAttribute("src", "./assets/images/icon-minus.svg")
    }
    else img3.setAttribute("src", "./assets/images/icon-plus.svg")
})

btn4.addEventListener('click', () =>{
    answer4.classList.toggle('show')
    if(img4.src.endsWith('icon-plus.svg')){
        img4.setAttribute("src", "./assets/images/icon-minus.svg")
    }
    else img4.setAttribute("src", "./assets/images/icon-plus.svg")
})