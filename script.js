const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3eb71a6638d0e63a6c3a16d5b8eabfad&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=3eb71a6638d0e63a6c3a16d5b8eabfad&query=';



const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');
const home_tiltle = document.querySelector('.active');

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then((data) => {
        data.results.forEach(element => {
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');
            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            const title = document.createElement('h3');
            title.setAttribute('id', 'title')

            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);

        });
    }); 
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';
    const searchItem = search.value;
    if(searchItem) {
        returnMovies(SEARCH_API + searchItem);
        search.value = '';
    }
})

home_tiltle.addEventListener('click', (e) => {
    console.log("i am here oh");
    main.innerHTML = '';
    returnMovies(APILINK);
})