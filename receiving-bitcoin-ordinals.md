---
description: Creating a Bitcoin Wallet compatible with Ordinals
layout: landing
---

# 🪙 Receiving Bitcoin Ordinals

This guide gives some basic steps on how to create a Bitcoin wallet with [Sparrow Wallet](https://sparrowwallet.com/), which is compatible with `ordinals` and can be later imported into more user-friendly Ordinal wallets.

Users can receive inscriptions and ordinals without downloading the whole Bitcoin Blockchain (550GB+), as long as they are _very_ careful about how they spend from that wallet.

## ⚠️⚠️ Warning!! ⚠️⚠️

As a general rule if you take this approach, you should use this wallet with the Sparrow software as a receive-only wallet. Do not spend any satoshis from this wallet unless you are sure you know what you are doing. You could very easily inadvertently lose access to your ordinals and inscriptions if you don't heed this warning.

## Wallet Setup & Receiving

Download the Sparrow Wallet from the [releases page (click here)](https://sparrowwallet.com/download/) for your particular operating system.

Select `File -> New Wallet` and create a new wallet called `ord` ![image](https://user-images.githubusercontent.com/8359865/216449381-59431068-9186-4ad4-8ec5-26096e7b166a.png)

Change the `Script Type` to `Taproot (P2TR)` and select the `New or Imported Software Wallet` Option

![image](https://user-images.githubusercontent.com/8359865/216449526-1341e7a7-80cd-4670-8df5-305e2f9fe02c.png)

Select `Use 12 Words` and then click the `Generate New Button`. Leave the passphrase blank

![image](https://user-images.githubusercontent.com/8359865/216449900-22a7a828-be82-4d83-8fa6-a387867d2410.png)

A new 12 word BIP39 seed phrase will be generated for you. Write this down somewhere safe as this is your backup to get access to your wallet. NEVER share or show this seed phrase to anyone else.

Once you have written down the seed phrase click `Confirm Backup`

![image](https://user-images.githubusercontent.com/8359865/216450422-b49126fe-61e1-4c76-9ccf-75d1f98b670a.png)

Re-enter the seed phrase which you wrote down, and then click `Create Keystore`

![image](https://user-images.githubusercontent.com/8359865/216450696-fe80cf2c-efc6-4e0f-90e9-0ad6efab9e6b.png)

Click `Import Keystore`

![image](https://user-images.githubusercontent.com/8359865/216450810-b663cc15-5efc-4594-80eb-a08a137f4293.png)

Click `Apply`. Add a password for the wallet if you want to.

![image](https://user-images.githubusercontent.com/8359865/216450912-26be08af-1f97-4765-95b5-d6c8d75c909a.png)

You now have a wallet which is compatible with `ordinals`, and can be imported into the "classic" `ord` wallet software using the BIP39 Seed Phrase. To receive ordinals or inscriptions, click on the `Receive` tab and copy a new address.

Each time you want to receive you should use a brand new address, and not re-use existing addresses.

Note that bitcoin is different to some other blockchain wallets, in that this wallet can generate an unlimited number of new addreses. You can generate a new address by clicking on the `Get Next Address` button. You can see all of your addresses in the `Addresses` tab of the app.

You can add a label to each address, so you can keep track of what it was used for.

![image](https://user-images.githubusercontent.com/8359865/216451098-a5cee423-f6e7-40c6-b8f1-6075ac678557.png)

## Validating / Viewing Received Inscriptions

Once you have received an inscription you will see a new transaction in the `Transactions` tab of Sparrow, as well as a new UTXO in the `UTXOs` tab.

Initially this transaction may have an "Unconfirmed" status, and you will need to wait for it to be mined into a bitcoin block before it is fully received.

![image](https://user-images.githubusercontent.com/8359865/217161639-3fcf1274-4840-4cda-a3c4-2a54ff57e600.png)

To track the status of your transaction you can right click on it, select `Copy Transaction ID` and then paste that transaction id into [mempool.space](http://mempool.space)

Each of your inscriptions is stored in an Unspent Transaction Output (UTXO) which can be viewed in the `UTXOs` tab.

![image](https://user-images.githubusercontent.com/8359865/217166374-4826359f-0cbd-4ca2-9a7a-ee7dbb73cefd.png)

Once the transaction has confirmed, you can validate and view your inscription by heading over to the `UTXOs` tab, finding the UTXO you want to check, right clicking on the `Output` and selecting `Copy Transaction Output`. This transaction output id can then be pasted into the [ordinals.com](https://ordinals.com) search.

## Freezing UTXO's

As explained above, each of your inscriptions is stored in an Unspent Transaction Output (UTXO). You want to be very careful not to accidently spend your inscriptions, and one way to make it harder for this to happen is to freeze the UTXO.

To do this, go to the `UTXOs` tab, find the UTXO you want to freeze, right click on the `Output` and select `Freeze UTXO`.

This UTXO (Inscription) is now unspendable within the Sparrow Wallet until you unfreeze it.

## Importing into `ord` wallet

For deatils on setting up Bitcoin Core and the `ord` wallet check out the [Ordinals Handbook](https://docs.ordinals.com/introduction.html)

When setting up `ord`, instead of running `ord wallet create` to create a brand new wallet, you can import your existing wallet using `ord wallet restore "BIP39 SEED PHRASE"` using the seed phrase you generated with Sparrow Wallet.

You can then check your wallet's inscriptions using `ord wallet inscriptions`

Note that if you have previously created a wallet with `ord`, then you will already have a wallet with the default name and will need to give your imported wallet a different name. You can use the `--wallet` parameter in all `ord` commands to reference a different wallet, eg:

`ord --wallet ord_from_sparrow restore "BIP39 SEED PHRASE"`

`ord --wallet ord_from_sparrow wallet inscriptions`

`bitcoin-cli -rpcwallet=ord_from_sparrow rescanblockchain 767430`

## Troubleshooting

#### Sparrow wallet is not showing a transaction/UTXO, but I can see it on mempool.space!

Make sure that your wallet is connected to a bitcoin node. To validate this, head into the `Preferences`-> `Server` settings, and click `Edit Existing Connection`

![image](https://user-images.githubusercontent.com/8359865/217167678-0d9f3927-58f2-433e-a6de-db021c244ec1.png)

From there you can select a node and click `Test Connection` to validate that Sparrow is able to connect sucessfully

![image](https://user-images.githubusercontent.com/8359865/217167848-5a2ad5e4-0a40-41ab-8cb0-bb582989aebf.png)
