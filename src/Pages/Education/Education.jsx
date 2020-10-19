import React, { Component } from 'react';

import './Education.scss'
import Widecard from '../../Component/Widecard/Widecard.component'

class Education extends Component {
    render () {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>

                <Widecard title="End User Services Technician" where="Open Systems Technology" 
                from = "March 2018" to="Present"/>
                
                <Widecard title="BS" where="Grand Valley State University" 
                from = "August 2014" to="December 2018"/>
            </div>
        )
    }
}
export default Education