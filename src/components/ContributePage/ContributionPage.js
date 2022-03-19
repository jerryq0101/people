import React, {Component, useEffect, useState} from 'react'
import './Contribution.css'
import {ethers} from 'ethers'

export default function ContributionPage() {   
    const [donation, setDonation] = useState(0);
    let provider = {}
    let signer = {}
    let address = ""

    useEffect(async () => {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log("Provider: ", provider);
        (async () => {
            await provider.send("eth_requestAccounts", );
        })();
        signer = provider.getSigner();
        signer.getAddress().then(addy => {
            console.log("Address of Signer:", addy)
            address = addy;
        })
    }, [])

    async function handleSubmit(){
        // Something something transaction with donation
        console.log("FUCKKKKKKKKKKKK")
        
    }


    function handleChange(event){
        const updatevalue = event.target.value;
        if (updatevalue > 5000){
            // Limit on donation amount
        } else {
            setDonation(event.target.value);
        }
    }



    return (
        <div className="Contribution-Page">
            <div className="Contribution-MiniPage">
                {/* // Figure out how to get ether in contract on here. */}
                <div className="Contribution-Title">
                    ƒ 10.5 Funded
                </div>

                <input className="Contribution-Input" type="number" onChange={handleChange} value={donation}>
                </input>
                <div className="Contribution-SplitBtn">
                    <button className="Contribution-submitbtn" onClick={handleSubmit}>Donate</button>


                    <div className="Contribution-buffer"></div>

                    {/* API for eth -> usd conversion */}
                    <div className="Contribution-Convert">
                        <div>${Math.round(donation * 2700)}</div>
                    </div>
                </div>
                
                <div className="Contribution-Tokendesc">You will receive {donation*1000} $PPL gTokens</div>

            </div>
            
        </div>
    )
}