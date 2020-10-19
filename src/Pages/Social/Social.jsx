import React, {Component} from 'react'
import './Social.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import {  faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Github = <FontAwesomeIcon icon={faGithub} />
const Twitter = <FontAwesomeIcon icon={faTwitter} />
const Linkedin = <FontAwesomeIcon icon={faLinkedin} />

class Social extends Component {
    render() {
        return (
            <div className="social">
            <a href="https://github.com/jilesm" target="_blank" rel="noopener noreferrer"><i>{Github}</i></a>
            <a href="https://twitter.com/DevilsAlterego2" target="_blank" rel="noopener noreferrer"><i>{Twitter}</i></a>
            <a href="https://www.linkedin.com/in/marcus-jiles/" target="_blank" rel="noopener noreferrer"><i>{Linkedin}</i></a>
            
            </div>
            )
        }
    }
    
export default Social