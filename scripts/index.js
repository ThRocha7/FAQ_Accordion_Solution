const questionBtn = document.querySelectorAll('.question')

questionBtn.forEach(btn => {
    btn.addEventListener('click', function (){
        const answerContent = this.nextElementSibling
        const plusIcon = this.querySelector(".plus-icon")
        const minusIcon = this.querySelector(".minus-icon")
       
        if(answerContent.style.maxHeight){
            answerContent.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'    
        }
        else{
            answerContent.style.maxHeight = answerContent.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }


    })
    
})

 