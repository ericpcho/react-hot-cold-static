import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={event => {
            props.onSubmit();
            event.preventDefault()
            }}>
            <input type="text" name="userGuess" id="userGuess" disabled={props.statusValue === "You Win!" ? true : false}
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                onChange={event => props.onChange(event.target.value)}
                value={props.numberValue}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" disabled={props.statusValue === "You Win!" ? true : false} />
        </form>
    );
};

