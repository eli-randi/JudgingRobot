import React from "react";
import './Goodbye.css'

export class Goodbye extends React.Component {
    handleFinalScore () {
        let movie = this.props.movie.score;
        let song = this.props.song.rating/1000000;
        let finalScore = movie + song;
        let finalJudge = '';
        if  (finalScore > 150) {
            finalJudge = 'Your taste is not that bad, keep on going. Goodbye!'
        } else if (finalScore < 150) {
            finalJudge = 'You guessed it, you have no taste. Maybe a self-help book for you?'
        } else {
            finalJudge = 'error'
        }
        return <h3>{finalJudge}</h3>
    }

    render () {
        return (
            <div className="GoodbyeHeader">
                <h2>Well, {this.props.name}. This is the end of our beautiful journey. To recap...</h2>
                
                <div className="GoodbyeBox">
                <div className="GoodbyeInfo">
                    <p>Your favourite movie is {this.props.movie.title}</p>
                    <p>Your favourite song is {this.props.song.title}</p>
                </div>
                    {this.handleFinalScore()}
                <div>
                <iframe width="350" height='200' title="RickRoll" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                </div>
                </div>
                
        )
    }
}

