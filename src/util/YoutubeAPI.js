

export function getMusic (musicTerm) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': '891d444976msh34ff20d47fbaa31p1f82b9jsn9acd122c97c3'
        }
    };
    
    return fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${musicTerm}&hl=en&type=v&sort=r`, options)
        .then(response => response.json()).then(jsonResponse => {
            return jsonResponse.contents.slice(0, 4);
        }).then(async music => {
            return await Promise.all(music.map(async song => {
                let videoId = song.video.videoId;
                await getSongRating(videoId).then(result => {
                    song.video.rating = result;
                })
                console.log(song);
                return song.video;
                
            }))
        })
        .catch(err => console.error(err));
    }
    
    async function getSongRating (videoId) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
                'X-RapidAPI-Key': '891d444976msh34ff20d47fbaa31p1f82b9jsn9acd122c97c3'
            }
        };
        
        return fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`, options)
            .then(response => response.json()).then(jsonResponse => {
                let rating = jsonResponse.videoDetails.viewCount;
                console.log(rating);
                return rating;
                }
            )
            .catch(err => console.error(err));
        }
        
    