import React from "react";
import { MovieBox } from "../MovieBox/MovieBox";
import './MainBox.css'
import { Introduction } from "../Introduction/Introduction";
import { MusicBox } from "../MusicBox/MusicBox";
import { Goodbye } from "../Goodbye/Goodbye";

export class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBox: 'Intro',
            name: null,
            movie: null,
            song: null,
        }
        this.setName = this.setName.bind(this);
        this.setMovie = this.setMovie.bind(this);
        this.setMusic = this.setMusic.bind(this);
    }

    renderCorrectBox () {
        if(!this.state.name){
            return <Introduction 
                    onSubmit = {this.setName}/>
        } if(!this.state.movie) {
            return <MovieBox 
                    name = {this.state.name}
                    movieDone = {this.setMovie}/>}
         if(!this.state.song) {
            return <MusicBox 
                    SongDone = {this.setMusic}
                    />
        } return <Goodbye 
                    name= {this.state.name}
                    movie = {this.state.movie}
                    song = {this.state.song}/>
    }

    setName (name) {
        this.setState({name: name})
    }

    setMovie (movie) {
        this.setState({movie: movie})
    }

    setMusic (song) {
        this.setState({song: song})
    }


    render () {
        return (
            <div className='InputBackground'>
            <div className='InputBox'>
            {this.renderCorrectBox()}
            </div>
            </div>
        )
    }
}