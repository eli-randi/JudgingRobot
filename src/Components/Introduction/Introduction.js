import React from "react";
import Lottie from "lottie-react";
import RobotAnimation from "./RobotHello.json";
import './Introduction.css'


export class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }


    render () {
        return (
            <div className= 'Intro'>
            <h2>Welcome, my name is Judgy Robot. What is yours?</h2>
            <div className="SearchBox">
                <input placeholder = "Insert name" onChange = {this.handleNameChange}></input>
                <button onClick = {() => this.props.onSubmit(this.state.name)}></button>
            </div>
            <div className="lottieHello">
            <Lottie animationData={RobotAnimation} />
            </div>
            </div>
        )
    }
}