// function onClickMe() {
//     alert('Clicked function');
// }

// const btnMe = document.getElementById('btn-me');
// btnMe.addEventListener('click',function(){
//     alert('clicked by addEventListener');
// })

//mouseover
//mouseout

// const btnMe = document.getElementById('btn-me');
// btnMe.addEventListener('mouseout',function(){
//     const randomTop = Math.floor(Math.random() * window.innerHeight);
//     const randomLeft = Math.floor(Math.random() * window.innerWidth);

//     btnMe.style.top = randomTop + 'px';
//     btnMe.style.left = randomLeft + 'px';
//     btnMe.style.color = 'red';
//     btnMe.style.position = 'absolute';

// });
const text = document.getElementById('text')
//keyup
//keydown
//keypress
// const inputMessage =  document.getElementById('message');
// inputMessage.addEventListener('keypress', function(event){
//     text.innerHTML = 'key = ' + event.key + ', code = ' + event.code;
// })

// let number = 1;
// const btnAdd = document.getElementById('btn-add');
// btnAdd.addEventListener('click', function(){
//    let newParagraph = document.createElement('p');
//     newParagraph.innerHTML = "Apa ya " + number;
//     number++;
//     document.body.appendChild(newParagraph);
// })

//appendChild dipakai untuk mengambil API
//Ambil data dan menampilkan data dari API

const paragraphs = document.getElementsByClassName("paragraph");
for(const paragraph of paragraphs){
    paragraph.style.color = "blue";
}


let parent = document.querySelector(".parent");
let child = parent.querySelector(".child");
alert(child.parentElement.className);