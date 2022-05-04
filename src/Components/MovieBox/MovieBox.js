import React from "react";
import { getMovies } from "../../util/MoviesAPI";
import Movie from "../Movie/Movie";
import './MovieBox.css'


export class MovieBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedMovieName: null,
            possibleMovies: [],
            selectedMovie: null,
        }
        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
        this.showMovieResults = this.showMovieResults.bind(this);
        this.handleMovieSelect = this.handleMovieSelect.bind(this);
    }

    handleCorrectName () {
        let greeting = '';
        if(this.props.name === 'elisa' || this.props.name === 'Elisa') {
            greeting = 'What a fantastic name, we are off to a good start';
        } else {
            greeting = 'Odd name, but I will give you the benefit of the doubt';
        }
        return <p>{greeting}</p>
    }
    
    handleMovieChange (e) {
        this.setState ( {selectedMovieName: e.target.value} );
    }

    handleMovieSubmit () {
        console.log('making req')
        getMovies(this.state.selectedMovieName).then(response => 
            this.setState({possibleMovies: response}))
    }

    showMovieResults () {
        let moviesResults = this.state.possibleMovies.map(
            movie => {
                return <Movie 
                        movie = {movie}
                        key = {movie.id}
                        onSelect = {this.handleMovieSelect}
                        />
            }
        )
        return moviesResults;
    }

    handleMovieSelect (movie) {
        this.setState({selectedMovie: movie})
    }

    MovieRoast () {
        let roast = '';
        if(this.state.selectedMovie && this.state.selectedMovie.score) {
            let rating = this.state.selectedMovie.score;
            
            if(rating < 30) {
                roast = `Ouch, your taste is not one of the finest. Your movie score is ${rating}`
            } else if (rating > 30 && rating < 60) {
                roast = `I would say you need to improve on your taste. Your movie score is ${rating}`
            } else if(rating > 60 && rating < 80) {
                roast = `You could be worse, not the best, but not the worst. Your movie score is ${rating}`
            } else if (rating > 80 && rating <= 100){
                roast = `You have some movie taste, congrats. Your movie score is ${rating}`
            } else {
                roast = 'error score'
            }
        } return <p>{roast}</p>
    }

    showNextButton() {
        if(this.state.selectedMovie) {
            return <button onClick = {() => this.props.movieDone(this.state.selectedMovie)}>NEXT</button>
        }
    }

    render () {
        // let movies = getMovies('jaws').then(result => console.log(result))
        return (
            <>
              <div className='InputHeader'>
                <h2>Hello, {this.props.name}</h2>
                {this.handleCorrectName()}
              </div>
              <div className='Inputs'>
                    <h3>What is your favourite movie?</h3>
                    <div className = 'SearchBox'>
                    <input placeholder="Movie Name" onChange = {this.handleMovieChange}/>
                    <button className="SearchButton" onClick = {this.handleMovieSubmit}></button>
                    </div>
                    <div className="MoviesResults">
                        {this.showMovieResults()}
                    </div>
                </div>
                <div className = 'MovieResultRating'>
                    {this.MovieRoast()}{this.showNextButton()}
                </div>
                    
          </>
        )
    }




}