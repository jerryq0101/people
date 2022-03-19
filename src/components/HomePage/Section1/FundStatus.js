import React from 'react'
import EtherFund from './EtherFund'
import './FundStatus.css'
import ProgressBar from './ProgressBar'

export default function FundStatus() {
    const etherAmount = 10.5;
    const dollarAmount = 26250;
    return (
        <div className="Fund-Status">
            <div className="Fund-Progress">
                <ProgressBar done="90"/>
            </div>
            <div className="Fund-Money-Status">
                <EtherFund amount={"Ξ" +" "+ etherAmount}/>
                <div className="FundStatus-Gap"></div>
                <EtherFund amount={"$" + " " + dollarAmount}/>
            </div>
        </div>
    )
}