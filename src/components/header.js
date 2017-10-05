import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav onBlahClick={props.onResetClick} onHelpClick={props.onHelpClick}/>
            {props.infoModalDisplay ? <InfoModal onHelpClick={props.onHelpClick} closeModalDisplay={props.closeModalDisplay}/> : ""}
            <h1>HOT or COLD</h1>
        </header>
    );
};
