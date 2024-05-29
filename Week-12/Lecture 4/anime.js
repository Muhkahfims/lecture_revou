fetch('https://api.jikan.moe/v4/random/anime').then(Response => Response.json().then(data => {
    const animeDetailElement = document.getElementById('anime-detail');
    const titleElement = document.createElement('h1');
    titleElement.innerHTML = data.data.title;
    animeDetailElement.appendChild(titleElement);

    //Menampilkan gambar
    const imageElement = document.createElement('img');
    imageElement.src = data.data.images.jpg.image_url;
    animeDetailElement.appendChild(imageElement)
}))
.catch(error =>{
    const errorElement =document.createElement('p');
    errorElement.innerHTML = JSON.stringify(error);
    animeDetailElement.appendChild(errorElement);
})