import React, {useState,useEffect,useContext} from 'react';
import Wenb3Modal from "web3modal";
import {ethers} from "ethers";
import Router from "next/router";
import axios from "axios";
import {create as ipfsHttpClient} from "ipfs-http-client";

// Internal Imports
import {NFTMarketplaceAddress,NFTMarketplaceABI} from "./constants";
//-----Fetching Smart Contract
const fetchContract = (signerOrProvider)=> 
new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
    );

//Connecting with Smart Contract
const connectingWithSmartContract = async()=>{
    try {
        const web3Modal = new Wenb3Modal();
        // console.log(web3Modal);
        const connection = await Wenb3Modal.connect();
        // console.log(connection);
        const provider = new ethers.providers.Web3Provider(connection);
        // console.log(provider);
        const signer = provider.getSigner();
        // console.log(signer);
        const contract  = fetchContract(signer);
        // console.log(contract);
        return contract;
    } catch (error) {

        console.log("Something went wrong while connecting with contract");
    }
};
export const NFTMarketplaceContext = React.createContext();
export const NFTMarketplaceProvider = ({children})=>{
    const titleData = "Discover, collect, and sell NFTs";

        const checkContract = async()=>{
            const contract = await connectingWithSmartContract();
            console.log(contract);
    };

    return (
        <NFTMarketplaceContext.Provider 
        value={{
            checkContract,
            titleData,
            }}
        >
        {children}
        </NFTMarketplaceContext.Provider>
    );

};