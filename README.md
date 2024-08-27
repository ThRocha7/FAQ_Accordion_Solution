# Frontend Mentor - FAQ accordion solution
Olá, pessoa anônima da internet!

Espero que encontre bem! Essa é a minha resolução do [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Esse desafio me ensinou muitas coisas novas que vou compartilhar aqui.

## Table of contents

- [Visão Geral](#visaogeral)
  - [O desafio](#odesafio)
  - [Print](#print)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [O que aprendi](#oqueaprendi)
  - [Vídeos citados](#videoscitados)
- [Autor](#autor)

## Visão Geral

### O desafio

Users should be able to:

A ideia do desafio é bem simples, e um tanto quanto complexo também: seguir o design da página, apenas visualizando as fotos que eles disponibilizam no site. Eles entregam o texto, os assets, a paleta de cores e as fontes. Agora, como será estruturado o HTML, como será estilizado, as ferramentas que serão utilizadas no projeto, como os elementos serão distribuídos no layout, são todas escolhas da pessoa que está fazendo o desafio.

### Screenshot

![](./assets/images/Captura%20de%20tela%202024-08-26%20215047.png)

### Links

Segue aqui o link do projeto finalizado, hospedado pelo Gitpages:

-  [URL do projeto](https://throcha7.github.io/FAQ_Accordion_Solution/)

## Meu processo

Comecei estrutrando o HTML do site, separando os elementos em suas divs. No CSS, criei primeiramente as variáveis das cores. Depois fui estilizando na ordem que os elementos apareciam no HTML. Foi um processo bem tranquilo, mas assim que codei a primeira versão do JavaScript no projeto, percebi que podia colocar uma animação para suavizar o movimento da abertura das respostas, e isso me custou boas horas 🫠.

Eu, até então, nunca tinha mexido com animação em CSS e muito menos com a interação do JavaScript para animar. Pesquisei no Youtube, achei um minicurso muito bom e também um vídeo de resolução desse desafio que, trazia um código muito menor que o meu, porém, com coisas que não fazia ideia do que faziam. A partir daí então, comecei a tentar entender linha a linha do código que estava no vídeo. (link dos vídeos no final).

### O que aprendi

Segue o código do vídeo:

```
```js
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
```

Daqui, aprendi o seguinte:

- Como utilizar o forEach para percorrer vários elementos com uma mesma classe;
- Que é possível declarar uma Arrow Fuction assim "parâmetro =>{}" e não só "()=>{}";
- Comecei a entender o uso do "this";
- Aprendi o "nextElementSibiling";

O if desse código ainda não ficou 100% claro pra mim, mas entendi o para que ele serve. 

### Vídeos citados

- [Resuloção do desafio](https://www.youtube.com/watch?v=HJuD66J7uCE)
- [Minicurso de animações em CSS](https://www.youtube.com/watch?v=eTELLTacg-8)

## Autor

Muito obrigado por ler até aqui! Fica aqui, minhas redes sociais:

- Instagram - [thiago_rochax7](https://www.instagram.com/thiago_rochax7/)
- Linkedin - [Thiago Rocha](https://www.linkedin.com/in/thiago-rocha-8a1b0528b/)
- Frontend Mentor - [@ThRocha7](https://www.frontendmentor.io/profile/ThRocha7)