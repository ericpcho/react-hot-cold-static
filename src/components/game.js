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
                totalGuesses: []
            }
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
}

render() {
    return (
        <div>
            <Header />
            <GuessSection feedback="Make your guess!" onChange={number => this.saveInputNumber(number)} onSubmit={number => this.handleFormSubmit(this.state.inputNumber)}/>
            <GuessCount count={3} />
            <GuessList guesses={[this.state.totalGuesses]} />
        </div>
    );
    }   
}

