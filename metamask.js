
let adress = document.getElementById("accountArea")
let loginButton = document.getElementById("loginButton")
let navbarUser = document.getElementById("navbarLogin")

// const express = require("express");
// const path = require("path");

async function accessToMetamask() {

    if (typeof window.ethereum.isMetaMask) {

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            adress.innerHTML = `Login Adress ${account}`
            navbarUser.innerText = `${account}`
            loginButton.disabled = true;

        } catch (error) {
            new swal("Error connecting to Metamask", `${error}`, "error");
        }

    } else {
        new swal("MetaMask Not Installed", "Please install MetaMask extension for Chrome", "error");
    }
}





