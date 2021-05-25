require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture story renew place artist harvest flower army general'; 
let testAccounts = [
"0x7ade46ab3dbd72de3b3bafed31a0cc1ad51791ad7fc9189967f9dee0e0c6ac53",
"0x766f342e4fcf33355df0516697b51135f310f89f82cbe37ef27c72779788a21a",
"0x5c0f077af5babfc5e29dafb25319cbd60d52ebc6e9893dc23d18dedfa5ee8d06",
"0x4c82833734d8dd5d15225af0ef1abe4e41a7d68ea64849219dfc5acfa8b46db6",
"0xb2a33904db7eb9895b99af1a5373e7aebbacf49b5440ecfb0650bb2f08c9697a",
"0xc9a5a965ac757a0236da43041bfe05d61b02e7ed1e3ab7c3584f6d8afb88fb0b",
"0xd245b6982137e69fc3be92f08b88956d262c0178e5a2b8f37b036e3f81a96325",
"0xe66fdfb9049f7dbf316519be45ef8fbcb2ecf72147da605a0cca0254c0b32a7e",
"0x658563ed00c8ea8db5d38cea6056354c6266caa9f523c67bfcebc1048a2d498a",
"0x854b84032a4110d4f958b0b786638c9f27cc06930ef5bbb625ac858c589a3c1d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
