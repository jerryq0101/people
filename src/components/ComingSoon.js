import React from 'react'
import './ComingSoon.css'
import { Link} from 'react-router-dom'

function ComingSoon(){
    return(
        <div className="coming-soon">
            <div className="Title">
                    <div className='teal'>[</div>Coming soon<div className='teal'>]</div>
            </div>
            <div className="description">
                Team is working hard to bring DemeterDAO to fruition,
                the website, the partnerships and the legal stuff. 
            </div>
        </div>
    )
}

export default ComingSoon;