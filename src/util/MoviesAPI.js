

export function getMovies (movieTerm) {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
		'X-RapidAPI-Key': '891d444976msh34ff20d47fbaa31p1f82b9jsn9acd122c97c3'
	}
};

return fetch(`https://mdblist.p.rapidapi.com/?s=${movieTerm}`, options)
	.then(response => response.json()).then(jsonResponse => {
        return jsonResponse.search.slice(0, 4);
    }).then(async movies => {

        return await Promise.all(movies.map(async movie => {
            let imdbId = movie.imdbid;
            await getMoviesPoster(imdbId).then(result => {
                movie.image = result;
            })
            return movie;
        }))
    })
	.catch(err => console.error(err));
}

async function getMoviesPoster (movieId) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
            'X-RapidAPI-Key': '891d444976msh34ff20d47fbaa31p1f82b9jsn9acd122c97c3'
        }
    };
    
    return fetch(`https://mdblist.p.rapidapi.com/?i=${movieId}`, options)
        .then(response => response.json()).then(jsonResponse => {
            let image = jsonResponse.poster;
            return image;
            }
        )
        .catch(err => console.error(err));
    }
    
