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

// const paragraphs = document.getElementsByClassName("paragraph");
// for(const paragraph of paragraphs){
//     paragraph.style.color = "blue";
// }


// let parent = document.querySelector(".parent");
// let child = parent.querySelector(".child");
// alert(child.parentElement.className);

// cara baru 1
const newButton = document.getElementById('newButton');

newButton.addEventListener("click",() => {
    alert("Hello World");
});


// cara baru 2
// newButton.addEventListener("click", clickButton);
// const clickButton = () => {
//     alert("hello world")
// }
// function sum(a,b) {
//     return a+b;
// }

const sum = (a,b) => {
    return a+b
}
// alert(sum(1,2));


const myName = "Kahfi"
//Example Template Leteral
const resultMessage = `Hasil penjumlahan 1 tambah 2 adalah ${sum(1,2)} \n dan nama saya ${myName}`;
// alert(resultMessage)

// const greet = (name) => {
//     return `Hello, ${name}`
// }

// Destructuring
const numbers = [1,2,3,4,5,6,7,8,9,10];
const [one, two, ,four, , , seven]= numbers;

// alert(`one: ${one}, two: ${two}, four: ${four}, seven: ${seven}`);

//Destructuring Object
let person = {
    name : 'kahfi',
    age: 21,
    job:'student',
    gender:'L'
}

const {name,gender} = person
alert(`name: ${name}, gender: ${gender}`)

//Spread syntax
const array1 = [1,2,3];
const array2 = [4,5,6];
const mergedArray = [...array2, ...array1]
alert(mergedArray)

