import React from "react";
import { getMusic } from "../../util/YoutubeAPI";
import './MusicBox.css'
import { Song } from "../Song/Song";

export class MusicBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSongName: null,
            possibleSongs: [],
            selectedSong: null,
        }
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleSongSubmit = this.handleSongSubmit.bind(this);
        this.handleSongSelect = this.handleSongSelect.bind(this);
    }

    handleSongChange (e) {
        this.setState({selectedSongName: e.target.value.replaceAll(' ', '%20')})
    }

    handleSongSubmit () {
            console.log('making req')
            getMusic(this.state.selectedSongName).then(response => 
                this.setState({possibleSongs: response}))
    
    }

    showMusicResults () {
        let possibleSongResults = this.state.possibleSongs.map(song => {
           return (
            <Song 
            song = {song}
            key = {song.videoId}
            onSelect = {this.handleSongSelect}/>
        )} )
        return possibleSongResults;
    }

    handleSongSelect (song) {
        this.setState({selectedSong: song})
    }

    MusicRoast () {
        let roast = '';
        if(this.state.selectedSong) {
            let rating = Number(this.state.selectedSong.rating);
            
            if (rating < 50000) {
                roast = `No one listens your music, only you and other ${rating} people.`
            } else if (rating > 50000 && rating < 200000) {
                roast = `Not the best taste, sorry. Only ${rating} people have listened to this`
            } else if (rating > 200000 && rating < 1000000) {
                roast = `You are not one in a million, maybe one in ${rating}`
            } else if (rating > 1000000 && rating < 9000000) {
                roast = `Wow almost ${rating} people liked your song, kind of mainstream, no?`
            } else if (rating > 9000000 && rating < 10000000) {
                roast = `You and ${rating} others have seen this. Hopefully you all have good taste.`
            } else if (rating > 10000000 && rating < 100000000) {
                roast = `Wow, ${rating} people like this. Is it a good or a bad thing?`
            } else if (rating > 100000000) {
                roast = 'Over 1 billion people liked your song! Must be good taste'
            } else {
                roast = 'error rating'
            }
        }
        return <p>{roast}</p>;
    }

    showNextButton () {
        if(this.state.selectedSong) {
            return <button onClick = {() => this.props.SongDone(this.state.selectedSong)}>NEXT</button>
        }
    }

    render () {
        return (
            <>
                <div className='MusicInputs'>
                <h3>What is your favourite song?</h3>
                    <div className='SearchBox'>
                        <input placeholder="Song Name" onChange={this.handleSongChange} />
                        <button className="SearchButton" onClick={this.handleSongSubmit}></button>
                    </div>
                    <div className="SongResults">
                        {this.showMusicResults()}
                    </div>
                </div>
                 <div className='SongResultRating'>
                    {this.MusicRoast()}{this.showNextButton()} 
                 </div> 
            </>
        )
    }


}