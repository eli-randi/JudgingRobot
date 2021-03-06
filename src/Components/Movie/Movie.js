import React from "react";
import './Movie.css'


class Movie extends React.Component {

    render () {
        return (
            <div className="MovieList" onClick = {() => this.props.onSelect(this.props.movie)}>
                <div className="MovieImg">
                <img alt = 'Movie Poster' src = {this.props.movie.image} />      
                </div>
                <div className="Movie-information"> 
                    <h4>{this.props.movie.title}</h4>
                    <span> | </span>
                    <p>Year: {this.props.movie.year} </p>
                </div>
            </div>
        )
    }
}


export default Movie;
