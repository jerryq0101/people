import React, {Component, useEffect, useState} from 'react'
import './Contribution.css'
import {ethers} from 'ethers'
import file from './PPL_CrowdSale.json'

export default function ContributionPage() {   
    const [donation, setDonation] = useState(0);
    let provider = {};
    let signer = {};
    let address = ""
    const saleContractAddress = "0x1E73b6847A224e48b7F3FbC2301F5DFb0eA502a9";
    let salesContract = {};
    let realSalesContract = {};

     // Setting up all of the variables
    (async () => {
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
        salesContract = new ethers.Contract(saleContractAddress, file.abi, provider);
        console.log("Contract:", salesContract)
        realSalesContract = salesContract.connect(signer);
        console.log("realContract:", realSalesContract);
    })();
    
     
    async function handleSubmit(){
        // Something something transaction with donation
        console.log("FUCKKKKKKKKKKKK")
        // Transaction Execution
        const txBuy = await realSalesContract.buyTokens(address, {
            value: ethers.utils.parseUnits(""+{donation}, "ether"),
            gasLimit: 3000000,
        }).then((transaction) => {
            console.log("Transaction:", transaction);
        })
        
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