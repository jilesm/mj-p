import React, {Component} from 'react'

import './About.scss'

class About extends Component {

    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Marcus Jiles</h1>
                <h3>Full Stack Web <u>Developer</u> | Application <u>Developer</u></h3>
                <br></br>

                <p>I started my journey in the world of computers from an young age,
                now I’m 20 years old, Pursuing my Software Engineering Degree in
                VIT University Vellore.  Web development is my center of interest, i always
                love the idea of cross-platform development, 1-n one code base deploy into almost
                any platform, which web technology like Javascript enables me to do. I also like
                creating Interactive UI components for better UX  and share those desgin and codes
                to the world through Github, Codepen and Instagram.
                </p>

            </div>
        )
    }
}
export default About;