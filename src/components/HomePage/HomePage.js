import React from 'react'
import Title from './Section1/Title.js'
import FundStatus from './Section1/FundStatus'
import Contribution from './Section1/Contribution'
import OurMission from './Section2/OurMission'

export default function HomePage() {
    return (
        <div class="Home-Page">
            <Title />
            <FundStatus />
            {/* Contribution Portion */}
            <Contribution />

            {/* SecondPage */}
            <OurMission />
        </div>
    )
}