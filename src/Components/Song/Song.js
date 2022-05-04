import React from "react";
import './Song.css'

export class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="SongList" onClick = {() => this.props.onSelect(this.props.song)}>
                <div className="SongImg">
                <img src = {this.props.song.thumbnails[0].url} />      
                </div>
                <div className="Song-information">
                    <h4>{this.props.song.title}</h4>
                    <p>{this.props.song.channelName}</p>
                </div>
            </div>
        )
    }


}