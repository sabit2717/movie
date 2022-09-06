let API = "api_key=a5733389ac4158fc952ab4e664bf4bb5"
let URL = "https://api.themoviedb.org/3"
let API_URL = "/discover/movie?sort_by=popularity.desc&"
let URL_API2 = URL + API_URL + API
let IMG_URL = "https://image.tmdb.org/t/p/w500"
let SEARCH_URL = URL + '/search/movie?' + API;
let $main = document.querySelector('#main')
let $from = document.querySelector('#from')
let $search = document.querySelector('#search')
let API_MOVIE = "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2022-09-01&"
let API_URL_MOVIE = URL + API_MOVIE + API
let $api_movie = document.querySelector('.api_movie')
let $blog = document.querySelector('.blog')
let $tags = document.querySelector('#tags')




async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results);
    
    showMovies(data.results)
   
    
}



getMovies(URL_API2)

function showMovies(data){
    $main.innerHTML= ""
    data.forEach(movie => {
     const {title, poster_path, vote_average, overview} = movie;  
    
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`
            $main.appendChild(movieEl);

});
}

function getColor(vote){
   if(vote >= 8){
    return 'green'
   }else if(vote >= 5){
    return 'orange'
   }else{
    return 'red'
   }
}
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getMovies(SEARCH_URL+'&query='+searchTerm)
    }
})
