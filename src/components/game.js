import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export default class Game extends React.Component{
    constructor(props){
        super(props)
        
            this.state = {
                inputNumber: "",
                totalGuesses: [],
                randomNumber: Math.floor((Math.random() * 100) + 1),
                status: "Make your guess!",
                help: false
            }       
    }

resetGame() {
   console.log("im resetting the game")
   this.setState({
       inputNumber: "",
       totalGuesses: [],
       randomNumber: Math.floor((Math.random() * 100) + 1),
       status: "Make your guess!",
   })
   document.getElementById("guessButton").disabled = false;
   document.getElementById('userGuess').value = ""
}

saveInputNumber(number){
    this.setState({
        inputNumber: number
    })
}

handleFormSubmit(number){
    this.setState({
        totalGuesses: [...this.state.totalGuesses, number]
    })
    if (parseInt(this.state.inputNumber) === this.state.randomNumber) {
        this.setState({
            status: "You Win!"
        })
        document.getElementById("guessButton").disabled = true;    
    }
    else if(parseInt(this.state.inputNumber) <= (this.state.randomNumber + 10) && (parseInt(this.state.inputNumber) >= this.state.randomNumber - 10)) {
        this.setState({
            status: "Hot"
        })
    }
    else {
        this.setState({
            status: "Cold"
        })
    }
}

help() {
    this.setState({
        help: true
    })
}

noHelp() {
    this.setState({
        help: false
    })
}

render() {
    return (
        <div>
            <Header infoModalDisplay={this.state.help} closeModalDisplay={() => this.noHelp()} onResetClick={() => this.resetGame()} onHelpClick={() => this.help()} />
            <GuessSection feedback={this.state.status} onChange={number => this.saveInputNumber(number)} onSubmit={number => this.handleFormSubmit(this.state.inputNumber)}/>
            <GuessCount count={this.state.totalGuesses.length} />
            <GuessList guesses={this.state.totalGuesses} />
        </div>
    );
    }   
}

