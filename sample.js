var btn=document.querySelector('.button');
var quote=document.querySelector('.quote');
var author=document.querySelector('.author');
let quote1=[{quote:'“Learn as if you will live forever, live like you will die tomorrow.”',person:'Mahatma Gandhi'},
{quote:'"When you change your thoughts, remember to also change your world.”',person:'Norman Vincent Peale'}
];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quote1.length);
    quote.innerText=quote1[random].quote;
    author.innerText=quote1[random].person;
})