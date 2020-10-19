import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../../assets/MarcusSuit.png';
import Social from '../Social/Social'

import './Home..styles.scss';



class Home extends Component {

render() {
    
return (
    <div className="condiv home">
        <img src={profilepic} 
        className="profilepic" alt ="Profile"></img>


    <ReactTypingEffect 
    className="typingeffect" 
    text={['I am Marcus Jiles','I am a web developer']} 
    speed={100} eraseDelay={700}/>
    <Social />

    </div>
        )
    }
}
export default Home