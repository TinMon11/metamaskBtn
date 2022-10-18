

let adress = document.getElementById("accountArea")


async function accessToMetamask() {

    if (typeof window.ethereum.isMetaMask) {

        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        adress.innerHTML = `Login Adress
         ${account}`
    } else {
        new swal("MetaMask Not Installed", "Please install MetaMask extension for Chrome", "error");
    }
}




