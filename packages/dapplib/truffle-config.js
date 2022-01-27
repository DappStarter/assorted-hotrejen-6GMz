require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember assume inner nasty fold slide'; 
let testAccounts = [
"0x45fe281fb70dffeeb5d0e8a52c00281059adb617fc4415b13b4356c529a321aa",
"0xd2855a98565321bd699e8d27359fa175a1e96848efb5543c8cd7ca0f685c4125",
"0xb2446cb5e0a832c7d2c9042a67c54bb2789a74b39c679af24b71bc548c2e31a7",
"0xf4944f3f18c23ce2e1ec2952d058afe108179d8cb267bca8eadde3a5160b0f8e",
"0x97d0d015b49cd876f8c6179e792dd98e7c6fe098afcfc9b4e063ca18344ebb72",
"0xb18b9a59cf4cefc1f0c721320b2db930fd9a2ca55713b676f053395d2235f2da",
"0xc72200a6836ba31ebca06fe80f6a28f590fa2a32fc94939b5d47e32939bf0666",
"0x3b0df6f220d9b5474a34251ece001d9229b6ecf35285c5022aa38b827e206b69",
"0xdda2e68d64dd00bdd3f8833d192c971b002ee52add743616fb02153bb826e09f",
"0x9f147e5ad5966dcde81e7c844433cc33098b50d15e661af75ebf318a094a259f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


