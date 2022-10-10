const CONTRACT_ADDR = "0x5B0D643dEf5fa4b07c37Dc5e5c9FAaCc0E1422ea";

const abi = [{"inputs":[{"internalType":"address","name":"_signerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintTeam","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintWhitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerAddLimit","type":"uint256"}],"name":"setMaxPerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPublicMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountRevealed","type":"uint256"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setTeamMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWLMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamMintClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var WL = null;
var TM = null;
var price = null;

const decrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = "";
  }
  document.getElementById('tokens_amount').value = newMintAmount;

  if (newMintAmount != "") {
    document.getElementById("price").innerHTML = "COST " + (price / 1e18)*newMintAmount + " ETH";
    }
  else
    {
    document.getElementById("price").innerHTML = "COST " + (price / 1e18) + " ETH";
    }
};

const incrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > maxPerTx) {
    newMintAmount = maxPerTx;
  }
  document.getElementById('tokens_amount').value = newMintAmount;

  if (newMintAmount > 0) {
    document.getElementById("price").innerHTML = "COST " + (price / 1e18)*newMintAmount + " ETH";
    }
  else
    {
    document.getElementById("price").innerHTML = "COST " + (price / 1e18) + " ETH";
    }
};

// PUBLIC MINT
const mint = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
      if (_mintAmount > 0) {
        var result = "";
        var success = "";
        document.getElementById("mint_button").innerHTML = "BUSY...";
        document.getElementById("tokens_available").innerHTML = "MINTING...";
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});

          const cost = await contract.methods.cost().call()
          const value = (cost * _mintAmount)
          const gas = Math.round( await contract.methods.mint(_mintAmount).estimateGas({value: value.toString(), from: accounts[0]}) * 1.1 )
          result = await contract.methods.mint(_mintAmount).send({value: value.toString(), from: accounts[0], gas: gas})

          success = document.getElementById("mint_button").innerHTML = "MINT";
          document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          }
        catch(e) 
          {
            alert("Error: " + "Public mint is not active or max mint amount per address exceeded!")
          console.log("Error: ",e)
          document.getElementById("mint_button").innerHTML = "MINT";
          document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "2000";
          }
        }
    }     
}

// WHITELIST MINT
const whitelistMint = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
    	
    if (_mintAmount > 0) {
			var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "WORKING...";

			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {from: account});
			  
			  var chAccount = web3.utils.toChecksumAddress(account);
			  var addressIndex = signatures.indexOf(chAccount);

			  if (addressIndex != -1) {
				  addressSign = signatures[addressIndex + 1];
				  }
			  else
				  {
				  addressSign = signatures[0];
				  }
			  
			  value = (price * _mintAmount);

			  const gas = Math.round( await contract.methods.mintWhitelist(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 );
			  result = await contract.methods.mintWhitelist(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  catch(e)
			  {
        alert("Error: " + "You are not Whitelisted or max mint amount per address exceeded!")
			  console.log("Error: ",e);
			  document.getElementById("tokens_available").innerHTML = totalSupply + "/" + "2000";
			  }
		}
	}
}

// TEAM MINT
const teamMint = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
      if (_mintAmount > 0) {
        var result = "";
        var success = "";
        document.getElementById("mint_button").innerHTML = "BUSY...";
        document.getElementById("tokens_available").innerHTML = "MINTING...";
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});

          const value = (price * _mintAmount)
          const gas = Math.round( await contract.methods.mintTeam(_mintAmount).estimateGas({value: value.toString(), from: accounts[0]}) * 1.1 )
          result = await contract.methods.mintTeam(_mintAmount).send({value: value.toString(), from: accounts[0], gas: gas})

          success = document.getElementById("mint_button").innerHTML = "MINT";
          document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          }
        catch(e) 
          {
          alert("Error: " + "Not a team member or max mint amount per address exceeded!")
          console.log("Error: ",e)
          document.getElementById("mint_button").innerHTML = "MINT";
          document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "2000";
          }
        }
    }     
}

// CONNECT
const connect = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    
    if (accounts.length > 0) {
      document.getElementById("connect_button").innerHTML = accounts[0].substr(0,10) + "..." + accounts[0].substr(-4) ;

  	  const web3 = new Web3(window.ethereum);
  	  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
	    maxSupply = await contract.methods.maxSupply().call();
      totalSupply = await contract.methods.totalSupply().call();
	    const paused = await contract.methods.paused().call();
	    WL = await contract.methods.whitelistMintEnabled().call();
      TM = await contract.methods.teamMintEnabled().call();
	    maxPerTx = await contract.methods.MaxperTx().call();
	    price = await contract.methods.cost().call();

      if (paused) { document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED"; }
	  	else { if (TM) { document.getElementById("phase").innerHTML = "PRESALE MINT | MAX " + maxPerTx + " PER TRX"; }
	  	else { if (WL) {document.getElementById("phase").innerHTML = "OG PHASE MINT | MAX " + maxPerTx + " PER WALLET"; }
	  	else {document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TRX"; }
	  	}
	  }

	  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "2000";
	  document.getElementById("price").innerHTML = "COST " + (price / 1e18) + " ETH";
    //document.getElementById('tokens_amount').value = maxPerTx;
	  }
    else { document.getElementById("connect_button").innerHTML = "Connect wallet"; }
  }
  return false;
}

document.getElementById('connect_button').onclick = connect;

connect();

document.getElementById('mint_button').onclick = whitelistMint;

const signatures = [
  '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  '0x007a05122899a536cfe035337fDC1B8559d2C75a',
  '0x8c96078d8a847b8c4f9a4808a0e417cc8e14336c5b6d505ba0ede06c58edf7501c67dde3fbb65b7c017e9f17c93bbf41e05235104a8ca7efbc957a9ed0b38ad41c',
  '0x02c4A98CcDfcA694807554BEc1cFf46152b6d3d8',
  '0xe6a1ece20e7071aba74f82dbf0cea7bebd93abbee4a768f8118aaa65e6c7d5ef1b3a42237ff9f536ac67dd3b46e27b4c18d601676827c6c7f7549a62194c21bc1b',
  '0x045d21471bcA36FBb89A70aB8A2B7Bf94FBC735B',
  '0x862a95106833349e26fd1ee6d51aac07501313dc6eacf6b519c6597dfca12aa85c64c5bfa82925a20e1d9c1a3f94ab535bf3ce4573e754355719cd00626414b51b',
  '0x05784E362E2ca2e51cB8E5CBf0EdF19416Ec171a',
  '0x3922f9d6be8806722ae6770615eff555ad74734c51f1e3e276603d163e70699f0846bc534d495624932cb2ac9a9b49a8dc2093dce71989a25cad99644cc072fc1c',
  '0x05d222a877028D6966469BBc3B60f1AF8590Ffea',
  '0x4377bb1b7147e1fc436e9afcc0cf211a6569305063d228787141f2039e33963a4906779f6ce7f76152d65acebd55d05d8334df8d891f1bd2ef583e36cfa853061c',
  '0x0716A2F1968f77FFE19f233ceCc0508B8D0B86C5',
  '0x6ecbbca174ee9b9fe7c49adeda5d493debcd1566d3677403dc884cb8f8dcd08f51a97936a41eb558a04bc4f20ac2fcf2271d767ad22b073163aa6c6294f0c8ca1b',
  '0x0A9173154C1D2F9f840F0eEBc8d42165CBBe2A6a',
  '0x49d238bc7d9a4c0b439a6f445eecc6198dcfbe8c977630a8c79e7dde21492eb4432943d49921853c56079810e854aa58dbab03b023968bc9cb2df66ef40b82d51b',
  '0x0B6164Db38C1A894927E7D3F82Ac652f7f0C888D',
  '0x9d37e39ea25493c5b5ee6d4b6c93216a895a6ee96215649f54ffb186fe8b373d6d1892765c8e3ba04960c2a9341393abc580272ef108bb183dac6db0a15451de1b',
  '0x0Bd43D8d46384eBeb49FCca2B6393A1aF4e231A6',
  '0xf883518cefef5f444becc6df5f6c504f82d81d7796fc50fa299dd98f83a41ba714a92fbbbdb66b670000729b1094d65b4555c0436c7ade954c040aceb315bffc1c',
  '0x10a877afB5EC92e9050594C7C24b9b78D13c324b',
  '0xef57540d382b21277f5ad7c48df9336ffc6648083dc4a27cc21bd29d23fbe8275845df6cbee64bc83764ff304854ad6e1094a1816acaa69d34199b9d851c8c761c',
  '0x1185679f8c068eBb45198e26afAc93a517cbB801',
  '0xff6b97a7877e7f00187f32dd2625a0d1c92469cebc02bb832a5df06a5a6fb88830ba8e403ccd02655b1a84264bc16619d71f4b69f6fc92662754014b6eb63db51b',
  '0x137593De591e8135F7d6A5840719a27bcc388711',
  '0x7a41fea350aa0ca960b72502ad14bbfdf1075bb53fce87d25b4a5764c029ef0812b948d29bdf8b64ebe172855e71cd4c5e7c8f16032c1c6ec2922a8a5f5ecaa81b',
  '0x1663A1389fA99e927329f9F45159517af55fD7Af',
  '0xd7b3c47855e1aaacc774f866d3daa3d9c5aa31736016b0b4fdfd429e375151d0530e51e3ac856810fbf728a0d26b8cdb5891e4a4f0a3febed23da949268d432f1b',
  '0x1bc63Dad550C32Cc5B7EC4a1bF260f779c70069C',
  '0x2dec8adf0ee862b7bac5e444b8190e0659266cb41c217391c3ce5a9a0f82e09f5684e72f1df43c8210a9d077deef6308aeabcd1387ec6bb9a3017e1a44680f7b1c',
  '0x1f3d7f63BC850C86Cf7D1Dd6aEDb0Ee7f1096E41',
  '0x82aa680de20dcbdb2b337d222a9a7058912b962044993fc8dd4eb8f5bd78ce266f63b0b1fed4aee1818de07667007654fb257a924dfc575be25b292d47bf5bc91b',
  '0x1f3EC5481e16DE6459534114a2844285C700Bc06',
  '0xac1d00069b3b92559814fed8899824e3df8f798a1486fb19f47d7f0b6eec59814c000979ca2bc55bbd0de3be5d097af6d36e4ad259512c36fed8f25f5cc884f51b',
  '0x20813d035689BDE436a0a993C166B8f4574Ca4Ce',
  '0x1eeee8934c6f9f70c8264f1f5608cf9ec41175056ac2331e598796a972b1c2e66ebe1fb353e46fd4ade491f5db088ff19f7861714192c33331680f3149d05cc41c',
  '0x21C52B6B5F9369c50A78CB615D34a0BCED6F23cA',
  '0x819f4041f07ac2480ef0c7d422af62e7da7abda247261e9beb5cf620496749cb4d9cc0d41311f385fd8da58aa170b20e2fbfc63581c15dd79ba52c6fa9ed1ce81b',
  '0x2307b04219414cb196245fE15Fa1F3Da1e119d35',
  '0x06f44328d7596b5d050b30aa655966b419057c477fc419a552403c5263d57aa819bfd7e63198fa8a540e46fb05e17fe8b805d1380f9343c87d0194419d8101511b',
  '0x2447eC26332b801feDE8CDd6aa9f99b791890Bc9',
  '0xeb937b8439108fbff57984a79204e3d975b5341452a7222c9cef25de2f172b866b45ec9273f36267e3b719d06957edea99c80fc07d964751bee79f8b52c9f37d1c',
  '0x24f14fbC0192dFdFFBBf66910672D2ffc8d58B0f',
  '0x49fd02bc002f1502cb852be3b7a369fe6f95c5ae3baeb367aa138270bd12984f51f71f108779139a90b0e34309c252d977a15ac221cc76e9fcf65300663ef6091b',
  '0x262016c288B6e657F4752e55f1081d04d90997dC',
  '0x90bcf9e0140f4c28b8e800f05051fad059928c574ded39420edeea70b810800716d14083882862532c12f6c11b9dbd38492750048c7db0b2d98f3dc9d1de4f171c',
  '0x273CDbB816f5D66E3E0FbB1A5Ac94af8e78a6De4',
  '0x384a7a309d3d6f25f91501028830ab5dd689287b524d97ed0bfdb7b753d881225034a46d58c382c052cc599a24b9aedeed7dfd79fc88d770c5ada27145abfef11c',
  '0x27648F043dB2D513ae27dC3CeA1bC58684d746AA',
  '0x32b33c2a1f05c0afdd98c3ed3469941e0ae5482427401c6020b71aa745e8a0be059381b7e32b01ddedf8c62051ebb759b2754689f776e3c6687464f2be519c3a1c',
  '0x2796139F4Bb77e1DBdC69e6109EE10fbb11457F6',
  '0x4b88df03bc73697c3d1d396b35bd11a1d40964e10e6c5c61371505af2868ede01b3c413df61fd9ccd70c2143ea6323c7d5351bd9a7ff38183b73b0f88c48d0531b',
  '0x28A7414e3430b89e582e8619B86547d33E69347C',
  '0xaf35b66a4d181f1bf15444a270d20d4932b438aed1755c666d6471d39cb9c9c15caa4a150d407610268e0dfb2dbb634417ac09b18e64fbfb69375d30be4263fb1b',
  '0x29d1855da3379B4b9962603332d6C226afe56184',
  '0x48fde95e0cf2dc525d1d95d682e8bc9e686d445a6291df5a31be0039fb94a9517bb4b1875e2dcf235d4e2624d675c6901680ddfd4fe886224fb1ddd913ff01641b',
  '0x2b39B60f9e12a5Cb04aA34718dcB013203Cd253E',
  '0x2014df1017374bc3755879aee6088f49eddda2f858cdb1e2cc96226999178e55027607b330584a3cae653d25c55b3780808fbb0a51e869243f00a25ddcb8dd561c',
  '0x2dbbadDaC5d5F99Caa892e2FA8a0990Bb9663A0D',
  '0x6ed3b5cc9f52a0db96aa1b00e2f8dfadedef0ce7e285d3ca95a139a884ffae960d50817469fe3daf2f0ecce4f5a127531ff15fe87736cbb73651d7acbfa95cee1b',
  '0x2eE51aC3B3F651db4e06E4CDdC2dcd49B4cE04b0',
  '0xd5ceb65326e6331f22e44ae713418a479f3a32627a7b3cc609fcf69c9deae3231756c07b1609c767c61ca6a7a776216639ea08eaac3c79f777cc00893abaceb31b',
  '0x3196D0CDc10edf96085bb487f3452e4d70C3ba67',
  '0x2653e344e0ec422bd719ae1a205c3f1592b11321c31f9e7bacd95624752e0877491239ba6de0a6f423c00f556452683969122385474506ed11e6442e2e7b86781b',
  '0x31b611Edf7974a1E85f049D17d26B912aBFA3059',
  '0x46473f0ff6645135045efa048ab5f62f3b8cf991c03fa3ed0ad16be2794baa0c7a7d4f6a47ca4061f6beea80b62b49b526bbe6a0d04914c616ccf1e77fb9cb581b',
  '0x33421DF379997f207faA4079E77A46b029361b78',
  '0x51b0124cc31dfcc43f157f685f13f9a9321db82325de4bb2b45ccb46853c2747727c5d0c9c08212884acbf962e794b07be5555ae0ae550e3207177488b31caae1b',
  '0x33f2604497e3fC9c01a99E87948dDe54802496E0',
  '0x1cac9329d22f640e49f713c0006e328f66e57f8e6276913cbbc829cb7404ffaa13f61b9cd672b3c612fcd86c450eb34a46f4451b80f458c7d6691c9c58da63b91b',
  '0x346d6B156E18c682c330e52d3F9D2dbFb3fa1697',
  '0x35121983ad0b8cca59ef7d671d0b237eba699722e2d43af7a36238ed8e4ccfdc54e20c45e1631870ce3db3d669e7e8014a734450bf2a6c430f65c9c7c2fe1bff1b',
  '0x34bbf3b83F82342F16AC3C5d7D3256F9BE9441bc',
  '0x93960217646d43be57bccfbc94ecb4dbd3fd136c7691991d8dc8a20aea8432e5345725f6796a8ef20d6a425e7efa8ef55a581dae1a0b85502495d4a9fa9e72e71c',
  '0x37FFe79d00C8c33E3f9622ac940e46BFa56d70a7',
  '0x3a94eb5f9bf5d4cc3dedce88601b4ead7fc9077f14523b4e275eb290df87cef55230b40c70e315f198931cced67c2db4132fd2c3ec707951a519db29bbd34dea1c',
  '0x3825957f9c078813904ab3b6ED003d5586530Eb7',
  '0x57531973c6a5306f287b1305da56e31bdb224881753c7ec9b977638c9248cffc73b0cd9c1c2e2a79cb1d99e40332ee809476329494118cea797dd6aa9201c5f91c',
  '0x3Aa17002F448bee09284dDe391A595E51DCd8c39',
  '0xc9a8c69e54651e76142ba9e74c5001cea12661c7bb5c8df5f2b157a0cae76eb04ebe07a7990479529e0ac08098bf4c1566effd229e8867b70570520aa7c8bf631b',
  '0x3B7e84041A9c4b6D7128b34214055969977F5a7A',
  '0x0cfa430bfb96e213c62ba5f4d10df3343362831b033a1b9c79df9929a3db470649a9266c0379ff85c2536c73cd8f1a28d20db261965d6bdebf35d1e31ade2b311b',
  '0x3b8ce093Bae0eBEb766A4a0C638521189E1fE1d9',
  '0x71f81b90f5d43d38933ec52f666abe2901357774c8cdb84ac72d4434c6f5db02177931b9604637e58ea8ea2e542701bb10aa2d24aa66a53fb43a83deed0c2f4c1c',
  '0x3cAA31a4E8759FBA5486F8D4AB8d55Ed3b9f992f',
  '0x3724fb1359939f4e3e1f068b302d4b80476824dcdda824846d4d3a6f111281be2e76fc9be516e781049b96daa3b782ae844232aa8732693d58f203f208c953a51c',
  '0x3fd36051AfAd45fBd07ac46B29559A85B7faE017',
  '0xea0d30b4d9ef6110059a2d8a472b88d733079f9eade466769689391ba4f7638047e0728f493401613b375e155db7f7769b26a23c0d8ba4ca1878f8fb8265a88a1c',
  '0x407Dc8877e24990Bda5A31A2a0c87E54a23F996C',
  '0x5233245c4dba9b1cb17f523e15294c1c5d14f1c28351d15eff801a7a2d3ee66f24ed42423c1afbc76a0b3e8e86a6ec19b2fe26c7b50212488daa57d1c41c31621c',
  '0x40F3DAf7AEe2529d3A4FBa5Ae85a6674421682e0',
  '0xa0a316cc52eeb991607ac0d00ecc5f68a37331a2d577e0cb6fff1e3086c57460022c5ab8bd478f0bb2d23b3afbc1fae091fc2d5701934f020a5af695c705fd131b',
  '0x434F0Ff02AA73fB3BEF0D5268DB548a06D82087F',
  '0x778001114937827ec9621e513e26ffb533db9971e3c257ae7e611b7568fe68ee421020d08b2603394a331272623a7176123eadf161e0f327a906bf2230dc3c751c',
  '0x43880899CC5093Be2a773040E3631234fd9eA7f3',
  '0x212c42ae45da8a3e79150bc14cb5ad0163773a18237c41bebea50cb21f46d1fa3b3a5a4a4b28a88958e14b2d60f39b357d8c4ec90fcc7f22ab4116c910ce104f1c',
  '0x44a2e65A1452242D98d48c1F9dfE2Ad47EbBa691',
  '0x5c02bdcdf6bc9a45663ca6fbe1475d780e418c6f71aa4d58044c60b273ea049c474586d9873580c9b54c34269a81eda5ebd4e8d7ee1ed7c006feffe336d592341b',
  '0x45791EDe84aB1563c1B9ad67531429360d394064',
  '0x8d3575fc8eeebdcc403c3e9d949ba06101e0e6b22e006d3f0eec282e5f32a95d25fdfc2fa350a4c1c79975a9e40867be531e33e6be9330616bb17f167ef8c94e1c',
  '0x48e658057b924732086d9452cc19A9d980253774',
  '0x253819133d141aca7f7bd96bb658c3756f160556f8cd9000c0507ec335a50bdb1e477877dd554bca193e9ed4a46190fecfdb648e01f74eab6c6be9c5920fe6ac1b',
  '0x49fbb9f90e78Dd1c0569816e1eEeaf2C28414ed7',
  '0x52442c9a372ddb87d09194fd76014d4e9371a5e848b24e440991656a2f1b4d59507c6ac0418c45c1faed0bb051e63976f9e4befd120c3b8219cae3541d84f2581c',
  '0x4A6eD099AEB1f6aE324865Adfb915060694604D7',
  '0x4d62e1777126d424aa1448b2db1e5b2b54b9ae514d5c574ceaaaafa916354af970c9684d46058d02a40958c4f136b3a40d55d8f31b74933d57cabcba8b73cb0e1c',
  '0x4d3319EaF5F4c0a8e704528626743949db705656',
  '0x0e03c3b9b816141666b63ab1830deff792bb3d372237fd6b9bb98b596b9ea5994861e595dccb3a73dc45ac8bc06557e9b27859b4dcb1664eb8127ce17aa1e6101c',
  '0x4D94a5193E0005581C546f63FF12Ef8be977785c',
  '0xea33ce39b7a9c6c55ab2163ffa156f6fe0404f11285a8eb3687ec7690a3a6dd1444ca4ec2515525fb22742afc77434c0ccb7d1ab45390bdd25d4cb5d0f751f881b',
  '0x4FAD869aD816e2897Ec9E1b31BCf26e59FdFb561',
  '0x0feeb99c69d58cc6e80d983f6355219f7af3af0322662672a388f6658d6e40ee1d421d5072aa3ff9681e9fabf258fb35345dead4065e4ed7d9ffd4b5429bca991b',
  '0x50CF79cA6F94896Ea87A0EA390d9f2d1b9ef24C0',
  '0x8ed1a786743f028e9fcf3651e9c1641800dc220cb2c514f1c878c6fd326c191e79e49c03132f9a7f9991deb473554c4737c388fde84c9e25d4d8222477c963431b',
  '0x517C03D12A6703CC63cFf44017FC13753BB59B44',
  '0x0ed7255a4bf51eb4ba2894b1dc7ded255329874878fe53db6bd517158348d16a252178a44a16b917e80e9fec016004a03a09d60e2aac0976d6c4103ac6c7904a1c',
  '0x5CC016319002f05249861B29C41C445104CCc493',
  '0x8b4c2c8eed8b481e3b60e7d89683057a2c60cd32a5f7a30556ed3821a58b6043646e3f257a191a428f8321be1e6c3932ea8e83dea761896e97d0b785bf475d231b',
  '0x5Da4356E6524d6873E7d0999Eee4a100f48D94aF',
  '0xfdd082eecc9de5a77b4369dae59e18cae76ff5f0e5e70626c4d8d8358bd625a13acfdc8e1dfd9a08103e83e4ed6fe0660f9234efcf251abeeb93699abaaf8e031b',
  '0x5DF34637904C4A90ba7C7B23E0d23C08d8c72E8C',
  '0x723dc917d25e2d5f41f8c12ead047fa7ddffa7176274597174cf0c453c1fa18b1d6fae9762e5ad03f920fee4d8a183826c4c8d43fcd0bd8384eead64be0731241b',
  '0x5e62aD8430e8F23bE61fB4567189b0a4bf9d605e',
  '0x5500a155e39dcfc32db5cd7d5e7adfc0b489a6229758fb936f53bb6a1a7c77af348c07be4fba78e3c439a5e1f91b119791f2df82a44612109f6b49643e7d79391b',
  '0x5eC8f8C819F2021F9eF1181b3C4bAd15c299Ba15',
  '0xdbd02d19cfb496febe178a763cb5d4940922d6f814f338197ba843631aa541af76b048d286ad82f9b8749a432efb20a27f5a1825e51c3a249a0098d08f4842fc1b',
  '0x641bF4D1B1fd3Ee038c14606d43DE9Df168C9399',
  '0x94ef008d73f64a0913ed566e47e13ae5b3469fb27284b9d79a3602f40304b48a3cdfaa120bcd5ff39ccdacd7845abb90cf40bcbac78bc41c0c45548fb6e5d1df1b',
  '0x64f6c05b7EC59713A9D0951340E59fa31762741A',
  '0x88ba691bc0f3de8b08dda9f58b6b972511d517165e390cf4ca6d781c0fc9e42d745e81b5754ae76c4b05e8b7158260ed77883a4925cccb9e9a5ae2d90f875c851c',
  '0x6546570E89768e4aA7FBF0ca787F682a27B2A7d4',
  '0x9662ff681f3643dab54a0fd4f4a257059b81d422a7873be44c986d063c9944482aabfb1e09f14f397ee4767453367f90484982d43c88c46b4cab1d4382627b691c',
  '0x65c1a2316D87265232A632F0A7883A1Cf059E9eB',
  '0xdc0d17889269c9c61608b408995c834d98375d4fcf93c79600472ae21b5455e768d1e17d1973fd35d72fa727a291f2705388ac61077d70b115cf11b024463a3a1c',
  '0x6671105FB321b4c42e096dD5A163b8562C51ed8F',
  '0xced17a1c090633edbdf394c196746d21f0fe6717949639dcb2091cc739c8fe8b702714fb3498a319a5eab9eaf441907be94550e0c9c21ff0c979e2791b0fbe881b',
  '0x67e073Cc230a3B87DA00FdBc0F3c59806Ec1435f',
  '0xcd4c3af4522af98440b0d9bd2ff1c46e2be57a4d6ac3f3c4f6d8426401e79a5b77a63ec65d440f9c5ab8e9e4da3dac46ddac481d9e42780967ad9f434a6162fc1b',
  '0x67fd01538Eb70630761052E2a8B3A042B3D9E0eE',
  '0xe44a7e3221696eee369632830c19a9876eda7cbee1ec2a4f9b03bbeaf6909c3d0e6878e26870cc860f3c0ce87f40d8919270a5b8475e7f9dd3a4a192f114724d1b',
  '0x68BA7B00F05e8C54b90883c6bd73DF97A8FFaBb9',
  '0xa58c4a5082b51b96016a94f2ec2f08458c9c5d1ee1e80263321dc7c6dda4bd141b2d23aab36c8aff2a6aa24332b8b0ee534c5229360bcf08f102e08345aac0c61b',
  '0x697Dc0e8A3b3e3758f59f32BE847b2290823dBC1',
  '0x3e3124a49ef1425bf26acae71e1b8d4a2f654d8a0629d65fcccfb9572286ffd65054eb6be8089e5693a3e429ae4de6d2e0b407724fcacf96899652af80944aee1c',
  '0x6adfb36596F3C0eF59B358D89466180d3f9a56c6',
  '0x038f40f561b1c1fe1bce000bd1740aec0601cb4165279a83fc40c32158c676765d0190564a863c3c42c6caea016ae0751c586a304ab146447a2f36a3287d7dc21b',
  '0x6b1bBED58FEA0026fe7BfcE6f729C7a7f68988e0',
  '0x754ffabe04013f2464d6ed970fd56d1b3df25e70c61547b3e597d24caf0e7656116a12365f94e37dfb3fcd2abf85d14df458c1d43de7e57a82fe25b6d8f653311c',
  '0x6E77bc34b1Ed11FDd8f5F6F2bDA9A42Dd3b88F82',
  '0x10d7cfb3d1bc9e8a067c9fbfe8c2774246444118d84afe544a3d3ddb14c1687e6c812613664c4371e9e7b2a2aa0ecdc71ab8fb307fb49c68c2453dd6ca44f76a1b',
  '0x719AeB7252671781adDA4D7F5Dd71d8Eb33D5111',
  '0x2e4522ceb03517334dca6cda421c67ce221da6fb21a697a13597a323bb1676dc6d7f9249f619cc479f895f43c910e92d5a4c3dcb52d19f4e1781d0e2cb211d031c',
  '0x729166E9Ab9C63C276461c26fe20c41aF96620B6',
  '0xc8f7d46c690214d8e1d3831c8c50c60cea6620febd6511cc19d10c6db502e3926f43281a241cb93b2e0f341a69b234c2aef99875cbf34834970fdf7969b1b9191c',
  '0x79f37a3D42B19BcA7A67C5a312aef3066619AE67',
  '0xb434c78d4b5cffc7fd5225872408a2abeb82bbfcfb78be513ab2fc8fdd15905d00b968d5d4f89aec459a180c7a4ff57759712f7c1b9fd4bcb2b911b526b1a13d1b',
  '0x7C5b7A2f56e47206e1bC67fF75FB1E3fc9291b02',
  '0x03ddc323b3ec3497bf0a41779262c3ac372b6093613e1cfbf48352104664728c4103e3732516eaef38cc57e8e20b09defe14935fa2cc5c0f8050d1a2738c9c101c',
  '0x7C5C0342F87c0887cc4310E0cC602a761AC63D4F',
  '0x8db0dd4affc85d14567300654af1e2ce082065d534aab66ac829380d3185904904373c0c8b7da9f9af2e03ab143f1decda5fa3c840032c08e4ce1bb595811b551b',
  '0x7C5C07f28D1b3cD063D42F4c0731B4691f7222cb',
  '0x5d5b72a2d20db2dd784e8c2ac40b1beebd117226902328b67666a1abf3e4aec115e07b418676f83693cb06b201b2874fb3a4acacdcb5da47e171308206412ed71b',
  '0x7CAbF58A7993Ff604B2533F4EF658B952185bA2C',
  '0x18981e3a6b258e528e67c007c73d1678031e5d5b3740bf46d5766da1bbf54c8503cb29fbdda2345832604b15cf8b57ca12772b3ef502f18dbc2e77d93a252f3a1b',
  '0x7cc26b600eC01F23209ba6fc80322Af5BD2B7155',
  '0xe27425843660d8ffa2c91ac4d83f5a5f4b96de3a3aa25cca60f8fd22a8314a242c5989951f4a20a01199e6b2323bc31cf318b0e9dd6d9f82ad3e76e0fb98ea5c1b',
  '0x7D3dA1d274ADb87855e8b70bE044e8f530fBDc75',
  '0xf0a4d8d88c3938ca226a0433a86a25741c5947a514211b93f41337c4eac2b0242d2fc5ea1bcb24650cf4ced98c53f123a7aad9f4dcc5314da97a4d151f501bd51c',
  '0x7fb1372f665e8060834A2aBD59c64cA925141B8C',
  '0x5842528ee72338a4c2ff6c951833e59d28fb6378633f62de182e9a7e6f7d50802dd26026cc5102876b74f3fddc68cb10be7337064ca4669ff3b1a95b2aee17c81c',
  '0x7fBf0e664e666B8ba2c7fFdB765DdfB08A963904',
  '0x66f87784d777e72313a05064f98db16ae3a9e90cb52123663dd50557a0da20425becdcce61be931e8ea33d201ded142670ed94f0725e2542c1da468cf94257771c',
  '0x83f267c54734aB422d140873c93896e5aedEAF18',
  '0x59720ccc00e2dd62b9878492564536463729fc6f76e1d3be0a35dea5aa9a315b5b7e0286c54167d2cd3b232f3137873a7860f5eccb704ce40881f2e987e31bb11b',
  '0x8530e5B5621119CB3e3Ae324e6A6e63014A6aD87',
  '0x10da5e64650f71b1d1027ed5fc1327fd987e23581b311245202b205a5b5457647d80cd61cc1fcda914b3f890b0b98652fa95a2dd10f3f165925705e9d2e4314c1b',
  '0x85B5F4F9368e4c9bA7C8061c8F98082f6A522e51',
  '0x02ed76d55d6a82fe7d35c4037c96d7b83f74b9e0d00c39311c1ade6af151677565a3ef84bae46ac0296b5eb0b23d7198c4466839eeb2c095927115931d930ee41b',
  '0x8665881EC88DA1C2992BBf6887c1663c3aDFa65e',
  '0xbf9713818b57ba8a5646f4bbf4878c5d1b87dedaa9a25d18af26d9a57688edaa3a38d7822d03dc2d5cb2c831c5bd5627575623dd52c23f7da0ee4a30b1cf73b61b',
  '0x8F926CFA7fFF4b2D17BCc49B48944B9Be9B8fC98',
  '0x4fdd0dc7e02cdcd9b0330e0001b72eac3552e618b0a7ecd3e765b9477ca818092bcb597a651a9b5fe7cb94e4a7ef8488b1d459590aedff73d2382dfff39b53201b',
  '0x907414fe7c2A9c35863c6a1c6CeCDd29fADbB84D',
  '0x79e3a3b86683deb4d9f306f1fddf5aef6ad30cba99f96906e877b7b77da2bc5b39b8bb1a6a13eebb934fb38af358a921f46259d0663a8195321be927e99ad5f01b',
  '0x90b676c2AffE747AbA94BfBD68Ed3fD13652fE45',
  '0x9045a5bc5eb0ee293a38fd633981c420b1bec1fd34bd9ec1117ce5172eb934ab03d0953dd4cd953f9608f674d4037c352c2c7e07ffadf10b4723701f776626c11c',
  '0x90c378f4D38E68F476d3de6fD43EC5728Bf789d8',
  '0x59e49dda09c2a1e4e9fbcdc4d72861f7209df431301d730a312c83457076c70e3cb1f6c924ee5e57d5ebf53bc40957f71b9646e60e6b502ae507fb027707c4d11c',
  '0x910125d5C0d39c4918F16A44e87118Ab2EbA9D9B',
  '0xc87f08897442bdd6c391595a18718c07cdd90fb285cb66b722aafb07b59d30fa0cd79ce4dcc0a9fbb26b592decd56cd8518032b643c4dff74a65a385494e75da1b',
  '0x91b6DBEeA6E271e22eaD4D2dC0e8e1373e0A9bdF',
  '0x28009e66ef2bc786b4ac59e13c7ac6a96dc73d6e486691ed6ce8dd75112357021002ea5617bc6c6fa6654cebe0ec81e362132b37ad307176975aadb7547aa4a81b',
  '0x92337a2cA343014d37fCcB29826b1EeD3C70C66d',
  '0x34ceab6c869114c38b034cf8ef6eef1adce37b5380450edbd6bd981ef1f4ad334d2ffc9feb348eddc81e654b688cc262b8ce29492f593a58b3d69fa035e800071b',
  '0x95132bf8885195afbfa53f2077b1a676c6e0ded2',
  '0x1acf2d1e270d90dd15092b3e37ed1a3c534b77b37276994efd148237721bd2081aa51c495ada78ebfaddc6548900d6182f414a9c459bc47c01f710dff39e98e71b',
  '0x952d69289AB7264f430AfB0cBCA5FBdc68051771',
  '0x4fb683554c10c7e754fff6e934df8165a0ca86779ebf76150e96bbe4e36ed6e12d90f98aa26cc5e3e59497a03da9cbafeebf3f122e4eadca4bbc2c1b411f3d3a1c',
  '0x962A2A5227bde0Ec8F8a2379Fe33c33251C4E622',
  '0x23da22934f8fc19d329e644da736ad5f46171a8fc9be29b434f60a260f484b517b55dac95f1fc7d8156dee50da52a3b62f6daca215405d029025c130202798dd1c',
  '0x97E112c1b97CebB89fa66e1A1D8a849453FbA34e',
  '0x57acb08b298fc42f802a2c948476fb5fac7a1ee8308ee123077217b4fdcae79e3f3d772bf26d5306ebd0a013685ed156a81ae432b3857ee0df2112ac69bee1131b',
  '0x97FEDF207245783152B8F37995BB757f24394590',
  '0x3eb8002fb0bc300336082fa893fb01b3a063f2169380ee2efd5d3bb6b37c0e984b0015b53b74d23951a246f33a0d7afb4ae5530e1ad459aa8b2bedd9be2c4f141c',
  '0x99D4E64035F13C50aDF4AB4474CA11252C36e751',
  '0x99895f5a12503d0bfbddf1cda8db62344db46e1300a80865ed3e71ae6b3da3997820e56017cc5ea00d023ea75450d7abd8e4455c9e53a9da91c0fff2c3fd8a5a1c',
  '0x93af1C13e61321Bf9B1eb9e899e8b8843d5C6E55',
  '0xcb2b05ffe90fa062ef4c222cafd34c10ddab9e582606292ab567b2ded9d1cc7264703153c68f0944b7ddb82760fcb4dee75b5fdf1a45444fcf832be6f8f38cc51b',
  '0x99EE62345a4b1d3025A5EabE5b6e3cEeCDB0C78f',
  '0x317834202654289067c6dda6d5ee08c3c76f843beaa1296f8db8507e24a470511f42916ef91c062c81c373921a45f9f982e5dd5d371c1eb2c4efa2267faefe311c',
  '0x9Baf7C87825e382408a5C17D36af48d3c8A4756B',
  '0xbe95a43ea24bf36f55889772d3e7287119e5ad49789fd3beb894fc731d2d474f6246b3565df74ee09d8139cae4d66212694e1811726eea7af7d4cbeb4f5e20681b',
  '0x9E64f57fB5E3e47480Dee9286cbe2baf753c0Ac9',
  '0x8e94fb14f2f566fdff3de206700f080da344b6388bc40a1c1802ac4c989b432a7e9582461d9b839c066a9c353f94b1ee38c7cfea455a3ec2459f58c32c2d1e241b',
  '0xa2A633241988c5b40B2C9dAa9c606B5792bbcBE0',
  '0xcecea7ca03b09e5b2dc4118dd22d7ad8609cd6670e837aa5112d7524741fcdde65525b948c960528838d758e22cf741e39157052623fe4cd548724eff6b520201c',
  '0xA39083153881ec7302414F5f6DA7a3b7b06A65df',
  '0x85701ea6c6717f8c52fb32fe0b2e6e2106d77940f4b4558bda7541883ac324a13bfd7362e0353b3a3e27d3b4511a9d64a04591036cf5f305d6fac4095a711ea81b',
  '0xA442fC397f3ADB0bb33E128050082ff886AB4EcB',
  '0x19362aa1be58a5be7ea2d218b9ac7ca04b64515a6f1f33c4a141baaed0e42cda20bd20d3834b0ef786a3f40594eaa3f5c179d0e537b4617949a7fb99c817ab2c1c',
  '0xa465c8c2C2e11F374463D4676E2f2A70D6D07023',
  '0x8ef822cc090a196fc3e196cc1c6f21791f5fb6ba340c2dd65f0ce6d4065794f86d059b33e5d4f094be33420872f9f8177ea846e0e203a9611cc491b965af7fa31c',
  '0xA4C43b64547FEfd0b5D39139a042289F2Ffc0F44',
  '0x4b7119b3bc101697e447cd3175fed9151a5d1efc5cc6d14ca1e2f52c8f6ed5415d0639b084404afbe2db7d5d0be372f6e5a4b81afb10e9568cfe1a3a7486e6b21b',
  '0xa57f0F694E0D82b5CB3F5b0EeF5529A3E6D682fa',
  '0x47db26e906f245637a6a92d809bd0c2f2dbf97ba99c7c3f6c892c4c9396d9a344c48f8cf11e755d4469b5429e7c784305d8d216b453790b1ebc14a520d68298f1c',
  '0xa6d31718Fb23EEaEce7cA295e924CA67CDdC6301',
  '0x10c2fc0193b1b764c3b2f2765df6b1c52e1674e7c4f17c20556c52424ae8c61f0e4186ec77d8e6f56b2a1fcb71491ee85669062c2a2ba4eb5fe6dae0a49b23ac1c',
  '0xA87BbCCe1137F76D64175a71c1F38a5f0518C1bE',
  '0xc3cdf40c6ed124e9efda0d71be20b84514d0111bfd1d2c18210aeade99d5eaef7d6ecaca312b066c1726dc3a6a22593a46f3ad3853a823144673aaa613c7177b1b',
  '0xacC81faf6846d4A60d722103AA4402534b65E5cF',
  '0x897f13c492cf9e269d3ec3b272d9bbb86b8d84fab6c8f4718db2b0b19aee33ed0833232c77c11df42822f50048ed3dcb5540f2de844ff8ff11777c901c02b7a71c',
  '0xaE2646B00548c7622de9587f80d1fC4D78DfdAe8',
  '0x8dea51d211946e42a4c9a9127f4bb7e2664c689981dc6a1b6100dc25c12534a505efddb9edf04fd0f7e17cc8ed9fb4ab8fe184a00c02fe615cb57c13a1f9991b1c',
  '0xAEE445b0CC0fF7C502A9605CD4AC9FDe12839016',
  '0x1f9fe5bc2d142832f0a961a0beb34aac0c1f6ffb4ec93ea319982e8f7de8a4782807418da9aa6065bb682056dc78af3e71145b65d6b653971a844660749c1a3b1b',
  '0xAF34d7dd88f2ba05e0C9B5189b1D6277A28eBCA4',
  '0x67e5a48e26f2df79e68bf1553d9fac026e9ed7f222f351ad6fd4285879aa3d6e26c9b295523c6fdf7379b053a032bf40df197123c8d101d9f40b2763e297ed5f1c',
  '0xaF3570DC9E88c8822bb71389840BA267aA060e13',
  '0x042763c79afb7a57ffc94ef66b55c45161bcbedc3262ce1dec8d034c14c723a71060ed9160b535f641fb58930178205c8b8d13b15a5c2b4cd1b43a3579cd7b501b',
  '0xB1a9B4389bc968f50994fb98cee5338c54De25f5',
  '0x9c5dad599590531bad035c4e94a8cdb22abd6b091c91829f0613f395d5f7836d084ced756b6af62112740c6d222b6b749d7e4fa14adecfd10288f42acd37739b1c',
  '0xb1c79E1D21a946996f21F4e2850D7b7eAefAF32F',
  '0x05418e1230fec46e97f4737229a47b63ecce087e87cfd0747aaf1c014411342c1709d4cab2032fa10ae7bb487375524c841748ca8b014fb6231e17a35a2b21ec1b',
  '0xB236f2dB2b3ee831564560c430ffcF0E2A77B626',
  '0xcf495c6ef843682dc5b38dee09f2040b567bbe0077069a3cb995108a534771b116afbccbf3163aff05a46a2e34e34964c82a4795e60143b280d96abd5ff276121c',
  '0xB29D84bD07a6e75da4092e2975F8C06d619a421A',
  '0x3c5f2eeb21938e86105d4bf5192af561804e92a0ba6d7576fb0d2bc4b0d3a2b373f2a9e4a9f1d56b1c55f9a3a7c677ca91974b379ed0e7188e72400cb4c34b1d1b',
  '0xB2C24D774A42B1Fc78E628526796E6e795c65fa4',
  '0x16541144459394e86edd77425c61f5b46e073e8e52f1946bcff79fe1d3a73872158d98fabf630f65c3199c43258e2949b7940128e112ea57447f76f9541ab48c1c',
  '0xb3308a2E373Cd0BC1918ACE67a1A3BEB317b6e3b',
  '0x871d89a31e166d6a9caa0db4cdf41298cb125670e6e3216fa7e5d4c8a6338319527d858d82bc22170ca68bfb243bbae84d3119eecba2beef2dc4400c4bb82fea1b',
  '0xb36D69Da7cCe1d6D221E8645E2cE7A1c65B67399',
  '0xa82cf56a0d0571154bf127abde8af6aef247a5605e69726df7526af7328a3b4b37c9f761305a0e8b52a4aa8fc699b0b3764626c8f97df6d807d022a35bf238961c',
  '0xB49b4a2d614a340818e43C4769a303eECcD040Fc',
  '0x45b5fd0ba4deb75d809fb46bad01a14610ad15cebe4275dfb47ea195df022ec020813aabfce3655e6a4ecceb3a7c030e0c5b747f0b8436f18b8e3ebf89733bf91c',
  '0xb5cA180081211730DD00d4fac6f4bEDF74e932Da',
  '0x0e3f985129427b79e8fead9f3fa871f070d3a6f107428d797439db27d0c0e0af614f94c15aae8a5fd2b58014f0a7e25dea8092c8907b18bd9500a67c93d869701c',
  '0xB9EE87EFF0800F07A5754F323537C1814804D8D9',
  '0xd1ffd1e577d5105680e6034673acc3d28bd94032d40633ff2f799be45eb0068142421bbd92a171a85e95c8198dcf1dcfc067831db1bb9dcf48ea2e5f5377ea021c',
  '0xbb909b914F1E39b0E5C30b4fe6E5d984331519B9',
  '0x8c9c6975be070114e06e358fcb1d8bbc6ca0ece4d0adfccb5219194948f93f86791a2ccc193f29bf160276e1c741aed96c8d963239b62cb74f154130f3013eb41b',
  '0xC0941Fd0ae89b4081b6519C7Af25867c9c262CB3',
  '0x65c2dfc37bc4c48d2d2c09405b3ba872d0c6d41be2ef5f2bc3ae4c0c7f8338dd7852922934a88daec0c26501086afb7c8ecf905e347c03de53935f5b87417a5a1b',
  '0xc0b7e869Dd7d06b6c49F3E94a2E6C96934d1604A',
  '0xbc520358c6e2f838202195458508a1b11029e2a300b3ec5ffb899437651fb0ee763feb3f1e464e3a3eb454e495d309a407c430b9120f3143e09f821280a545101b',
  '0xc12d10395B8e46aB1B8F576fac979fab20efa747',
  '0xebfbf79e1b2c12ddcb9b6c0f0546213bb028890a6e88bd8ee67883c5a5a99599111bfca95bf637dae3408bd31783d070879408e2dfce80ba362cdf30c2f1aa8a1c',
  '0xc1Cc2fD5125F5c04E82939314d55CEA87bE67347',
  '0x69449cd5560f6db444913e2cfdb10efb5f76fbea28463f1f331df222424055e92c4eb1045d2ef4f5639ff58eda007d35e1f0c823e5512aded24b1b5e4eacdb471b',
  '0xC2885d7a952640e5c7B609Eef4A8BAF3Abb34264',
  '0x210d966e2306017c56746c15e7d492b79319343df5ec4886f6ca0a26ec81b7c07eb674d6b81557105f6723b1fc3da493917417219359b6970831735dfcc0ebfe1c',
  '0xC4741484290Ec4673c6e6Ca2d1b255e7749bB82b',
  '0x55f9db00ae769d3e0e28355a0e6a5a42410813720c2c73f2bd65247f4861f80e5f60cb517ce67bcd893e76b52bb5e7f23cdf46ba1bd1cb9e7f64eaf736d92dba1c',
  '0xc8e1b020844e825e9c33dfea83390D6b2e3E9f6C',
  '0x38fd3b6639de61dfaf16f808b97c3f6823a9b61dc7501e396a7594125771fcf643c5dbf3e00af3a52be38e28d2ca5b7562da99a85ec8b57e9e8550995cbc9b0c1c',
  '0xC998461A054505814B72944FF3e891ca76b4551E',
  '0xa8f23491ef2c8893bca1f3d75770cfcfc02de4220f6620ad0a639b7a534dc3d06ca0fcd006edbf17f0dda51bb104b4719da116826129a513d12ca9b2e2f0cd111b',
  '0xCD217698A51dD25cA3926cBD7cd209FbB20B87Bf',
  '0x6d1163ffb8f0de1e4abf3e7e5c78b1b604b5e88d2ac4e0bbe2c423472fd8a72f5d340bf250077edcace348be44af4674c64f1f28fa404fb39c882918a1dd409a1b',
  '0xCf1320fD381bFDfc9Ce76Cbe9806aAb1871244b4',
  '0x7d67f7908997cae092cf56c79c232049cc9ce8ecdd6dce5e03c49f06e63eda654ade98abf19e13adedd1b28750e0b29f8717569dc697a64d8ec340bd0d8b040a1c',
  '0xd11f16b688B832550a4F6e11153849DF2Cd37dbE',
  '0xfd3041ef5eb8ee43dd86aa47a07391f5024051c29ee2bbf190480727441233cb5fdd2cd83cd8e9d7505b8b6867fd01c3ed1677f3dd87ffac76da3bb9ccb81c3a1b',
  '0xD27Bcc7ba02a2AeBC033eA01Ce7D4E642494318F',
  '0xc8852813c5e1e1a1d90a5011bed5e5ef8a8afb2b48740b07bd95c6e60bba89130080389baf68140844cda394558d96481190ae781ff1c66bad959cb05bc677601c',
  '0xd3dA3dd2f4a9b1650Ed190C7DE3c8BE081348222',
  '0x7f03e8518e76f4cb262019c9ab357f12d04959dc1042c39ebb5ec0cd72438d737817220d920a3ba33ad39ddfa2c889c503869baadea2f9bd7028d50cb7ac98501b',
  '0xD41939EDff69CecfCF766fa7dac3979B4744c8c0',
  '0xd82ed94682fd18f22eec87eb1b872794a1ba2be1164ffc473393106d47a7cb696571d2c720039ad14df4561307738845e5d395f6c3f046b7e4f7df74f4e49fb51c',
  '0xd4657e77fdc23238cb1570a093bd83f79d0ead2f',
  '0xee64bfa1269d9247e551dd1e8d489b0aeb2c6c2d1831e941d1ae534dbd296a506d0811ed0db7a7a5fd1d82a0cf0692435c998cbd5c2c222b51196d5d1a4e22fa1b',
  '0xD4c53c9eF3D3CD8285565B78CA71e9832B4B287a',
  '0x09a8caf9e4cc13bfdb8e6862d7a8553b98480a7e0ad3ac7b2b1a1254cd6fcaf74181dfa581699710d3d69a07bfe237c66da827c9cc98e39d1582586eef11bb511c',
  '0xd8ea85997160272c3F9F0E95DB8a14d367B8C0EC',
  '0xc7c41da9ea6f6f7f2c6973a1c55474be713bee753698ebff79b042bcfc60b6d448c8b061aef2ebec5257ca5ed4a69921e06fdb768d375cb1de524bb96c5339521b',
  '0xDd82Ab9E866B8E2e2Ea2DEF9A49EFc9A006c8392',
  '0x3d7bfdbc1c91a8434247c47f0b616f5783545ba50efe2f6be4f9e527815dad4b7fda4b7737775f83c0b23314a2fbdea9a9a9494418c043f9bc66a35f35a497281b',
  '0xdEF500C77274dc30Ae945344C6744761B4220992',
  '0x7eb336c8b65adb7a05afafe835d703458beeb8370505b1b2175dc5e93523e6eb31384bd8e6534a7783a8342758d29062ef6f5049eba4a360c63f04e2240a445b1c',
  '0xdf5dDb4E59c3Fb6E061e9C8c0268F6Da28084Cc4',
  '0x132d715f2d3c44d4c2c42ed1236712f0214e1c7f2a7ec4f536b3651caf1cc9685aab0e28c84c7535dd537d0fec70038d6d0b895c6f015e3c0173c8efcb67c4a11b',
  '0xe1782bcbef30270fbbfa96a11130ee5dd5422a88',
  '0x66939ace9d9e8de5014ee1f7b0939d5f1e24920a6395108c8618b9662e7b45f31a7a1156be2c2b91e2fe799ec5baa3ab625f5d9893cb193718f1f188d53160ac1b',
  '0xe1f5C168D41256a7945Ac55700cC6E3B280ee1de',
  '0x6b496eee007821e46953c3f4625d99f3a58371f0cc2342b68dfb3dc01910becc253978699c1685a0e96dc51ab2e6e52496f7aefd8a9c002e32c9147e2aa9491f1b',
  '0xE2921B5FA7bF0FbE9Da85091AaEd8DacFCe9F6Eb',
  '0x45f21f86df24aa0e4418a2e0e5b5095cfe002c135b707f2d382b2f9eb5879f2b32e06535a2c23d90c329f925b6b5e2018b9f6a320f64d27a9f22196855f1f0841b',
  '0xe870BA83582F281CA029f8e9fF2F7334572330Fc',
  '0xaeecfa0a1383fb33066f337adc661d6f86d108f1bd7e829b93809439fa0e0bac76bb42ee46df3ba68389732c756243450b685c6a89535f0efbfdd9108a1830ef1b',
  '0xEaCE06c09a26AA0B44FDD6Bcc730DB08E4711210',
  '0x999f48dd69e2ccd10a4437a6a848da96b9d2e202235911148a3a82bfd2d6b5f50f1cf9103e9d303415ccf7609347b5e4fd5cff5202cc85ef993f9891251b32151b',
  '0xEAf7A58c2CeB027a78E20726db60a6Ac398579Fc',
  '0x1c6569ccf3d33292fc1b5409663776c6303d30625ab94bf79c9b0f56d78c3dbe5f5e9540d7deba1d685667cb71d0cf9d8f4cf74faedeafce1573d3c26184017c1b',
  '0xeE80ca3bf8845B8c712E0A0A944B6c25211E5209',
  '0x24f8c73fe16dc3e552cfc44d6af5fa9da21d39cbe6b35502d5e4df5b068bc76c6f6409e54832240d8523f09d51ef3277271cc3478b0e558a6b7804b6b331a4d91c',
  '0xee89C05E43B05DDb73309fb7f86F398006153dC5',
  '0xfb8489695fcd0ea7dbeb9db7ee1d8dd53d707e100a1e1e42f19e690a006f3b705303be186fd95ff53ee00e5eb4f11859a476af3161887ab4c570b01a8df6825c1b',
  '0xeeA1362c493431eedeD3982363CFF4dDEBCdc9d3',
  '0xe7ff810e584164660ac0bf36007c6f4859134505682f422a5e4f1b783f9f7b21783c16b1f890b49058e621380644ecdef9ab6585b080b40aae8db5043e78c5d41b',
  '0xeF2b357d8A0f44FdC8E62841542C373386fCDF3B',
  '0x1fc1c0c753986c5fc75d7a5b7860e7bef873505b0a1025d0dbb1673ddba260195fda090d49667183bea6d126c8c88821295edcb14a1af13bd58b5bb2fce7d46c1b',
  '0xef5E2679243715f62C955728544CcB8E39c813A1',
  '0x90db59546c5b08694e81e4719bf19a029080e08dcb53d8cdbdc326c03e094afa053b301bc3ef2614d49f6e3785eb5fab9171d3f954be838a103644eee787581a1b',
  '0xeF888f32AB2dC9f09270B08d5001c28CF824d95b',
  '0x81d20592b56ae7ceee5a726edd05335fb066bbd87435586fcd31baf3437ca59a6275f4f9beeacfe8e945f25e03c9ef565b6a97b5378259455ae0052b8ed4de5a1c',
  '0xEFB2bB6A6C8Ebc3238Fb81Bc1bc55ECb4fB132FD',
  '0xe198d37abf5913e3b5de223fe93002c313159b7b51a3b6cc840fc293a448d9445145acef489e7f0f63d39c0338ef29230cb82ad3f6f62ace920136bf0c0cf9601b',
  '0xf372675f73B4eB952F77c427Ae8D1c2fF6F86347',
  '0x290fdcc849a42327c630c5074341b190e9278f2278152b5b7cdda49000a2d7fa1bb3595a29832444dad9364eb403fcf72eb004098f9f3d830e1ea3fe4427f3021c',
  '0xf469B695d76d43E8950ECA7ebd57581514061eCB',
  '0x3c89d2966e4872d8590cc3b8380c37133b3dab56cc1fd6fe761fe3d8f490297f3c03b55490cf6a522acc0f8845f3cd734dd57e573028af586c46589310b15c8b1c',
  '0xF49C180B2094C8342B129C4C02d6F8513Fd95E80',
  '0x0712cd9ac9ab59e2624d80afc29a9e18d8444f8a5dd97de8686c9b943a1d1508735c557f520f2f45280a6ec2d82c2da841dd0639eac35f21bc5318e78e58b4561c',
  '0xf4DF2FF2B0da2713D2Cc11c1107a4bF16Fe4BFE0',
  '0x154227063bfedd71adb8769a1a2828b1e85bdc13566620d84a236e54d45f17bb01748357b1c6bc7b95ffb5b3f68ca09478691118838ec76da161c86c2481c22e1c',
  '0xF53e39390B04d4B00299D307a66d9159f9901854',
  '0x0a0c1431c6f0166478cdb89f6ef43f1c1342c54605906590b1a68a8d7f1f093a377c46a45b9d18ea731f4aebaf342c720f32cd7af6ec986e720ded0818b10fca1c',
  '0xF59BC29ddB7185b67e828de7713FD68b768e6ce0',
  '0xf579b1e72b040571a9c405555ea64c912c1584f03ce138f5492de925034600e7112a1c5786297d131eb9411376baed4581e2c4b8bf5c03b905f371bbdb1c8b0f1b',
  '0xF9f2abdFDAf8B10639aE0cD819eA6Db5C8cB9142',
  '0xea6b3b5be5af789a9cc4e3398209b2fef7e68af960eea55202832c9972c60fa20ca27b9bf88b26c34f2286d9792275edc85f3a6ef37264d0d36b19264a1be4a71b',
  '0xFc717AE00cBD8e9392bC74132C69b2C388Bd3559',
  '0x847d3c9bf72b67b085285c79c411ae203eb110958360c0e052213c9b7cd35809293c014405e7eb9d4e37ee64083c1f5df6301292fc81eab3ac2467300510f2751c',
  '0xFDee4f4437e27293AA0786b74FCDd7818ac719F8',
  '0xd6989a66504c4922d2cc44c618fa226d948ac715b74c6b8853d2ea5b5ed2bbd1037a0c0d573df24a7b5e101a33f65850c2e93ace1f5572b9f130bb3983ba04311c',
  '0xFECE31D9eD6B02F774eB559C503f75fc9b0bcE4E',
  '0xc96753c00a3c3e873ab8fd8c389efc35ac252583bb47995407964f74c64bb4aa15599c233798e16fee9fdc5217d7f09d4392f41e66b89500352871c78ec26f5a1b',
  '0x7Df66112522154EE1F64DD2Ee016da83ae7Da99E',
  '0x352e3612d28976e6446012edc97ffe34c2fa8d6521eba998e0d48417b2b998c65e722443e8452c85141359e937404caa8298a5cf0b0a5c7b263bd77ed7d34f801c'
  ]