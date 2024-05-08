const text = document.getElementById('text')

// text.innerHTML = 'Hi';

// let pets = ['cat', 'dog', 'chicken', 'turtle', 'rabbit'];
// let revouStudents = ['muhammad', 'kahfi', 'MS', 'Astrina', 'Astrid']

// for (let i=0; i<pets.length; i++){
//     text.innerHTML += revouStudents[i] + '<br>';
// }
// text.innerHTML = pets[3];
// for (let index in pets){
//     text.innerHTML += pets[index] + '<br>';
// }

// const num = [1,2,3,4,5,6,7,8,9,10];
// text.innerHTML = num.length

// const person = {
//     name: 'kahfi',
//     age: 22,
//     isStudent: true,
//     university: 'Unhas'
// }

// text.innerHTML = person.name

// let revouStudents = [
//     {name: 'kahfi', age: 22, grade: 100},
//     {name: 'awwad', age: 23, grade: 100},
//     {name: 'zaky', age: 16, grade: 90}
// ];
// text.innerHTML = "nama:" + revouStudents[2].name + ', score:' +revouStudents[2].grade;

let kdramaList = [
    {
      "title": "100 Days My Prince",
      "director": "Lee Jong-jae",
      "distributor": "tvN",
      "leadActor": "Do Kyung-soo",
      "leadActress": "Nam Ji-hyun",
      "noepisodes": 16,
      "releasedYear": "2018",
      "countryOfOrigin": "South Korea"
    },
  {
      "title": "Crash Landing on You",
      "director": "Lee Jung-hyo",
      "distributor": "tvN",
      "leadActor": "Hyun Bin",
      "leadActress": "Son Ye-jin",
      "noepisodes": 16,
      "releasedYear": "2019",
      "countryOfOrigin": "South Korea"
    },
   {
      "title": "The Doctors",
      "director": "Oh Choong-hwan",
      "distributor": "SBS TV",
      "leadActor": "Kim Rae-won",
      "leadActress": "Park Shin-hye",
      "noepisodes": 20,
      "releasedYear": "2016",
      "countryOfOrigin": "South Korea"
    },
  ]

text.innerHTML = kdramaList.map(function(item){
    return item.leadActress;
}).toString();

//   for (let index in kdramaList){
//     text.innerHTML += '<div class="box"> Judul: <br>' + 
//     kdramaList[index].title + '<br> Aktor:' + kdramaList[index].leadActor +'</div>';
//   }