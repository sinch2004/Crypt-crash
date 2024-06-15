# WEB 3.0 FIR Contract

This is a Solidity smart contract for managing FIR (First Information Report) submissions on the Ethereum blockchain.

## Overview

The FIR contract allows users to submit their grievances and complaints in the form of FIRs. Each FIR contains relevant details such as the user's personal information, the grievance title and description, the police station name, and the date and time of submission. The contract also includes a status field to track the progress of each FIR, which can be set as Pending, Approved, or Rejected.

## Features

- Submit a new FIR with all necessary details.
- View the details of a submitted FIR if you are the owner of the FIR.
- Check and update the status of a submitted FIR, accessible only by the contract owner.

## Contract Functions

1. `addFIR`: Submit a new FIR by providing the required information.
2. `userFIR`: View the details of a submitted FIR if you are the owner of the FIR.
3. `checkFIR`: Update the status of a submitted FIR (only accessible by the contract owner).

## Contract Structure

The contract consists of the following components:

1. Enum `status`: Represents the different status options for an FIR (Pending, Approved, Rejected).
2. Struct `USER_FIR`: Represents the structure of an FIR, containing various fields to store the necessary information.
3. Array `USER_FIR_LIST`: Stores all the submitted FIRs.
4. `id` and `check_id`: Variables to manage FIR IDs and status update IDs.
5. `owner`: Address of the contract owner (deployer).

## Usage

To interact with this contract, you can deploy it on the Ethereum blockchain and use the provided functions to submit FIRs and update their status. The contract owner can use the `checkFIR` function to approve or reject submitted FIRs.

Please note that this contract is for educational and demonstration purposes and may require further enhancements for production use.

## License

This contract is licensed under the MIT License. You are free to use, modify, and distribute it as per the terms of the MIT License. See the [`LICENSE`](LICENSE) file for more details.

## Smart Contract Deployment

You can deploy the FIR contract on the Polygon Matic Mumbai Testnet blockchain using the Remix IDE or other Ethereum development tools. After deploying the contract, you will receive a contract address that you can use to interact with the contract functions.

## Deploy Link

The FIR contract has been deployed on the Polygon Matic Mumbai Testnet blockchain. You can interact with the contract using the contract address provided below:

Contract Address: `0x266918717c31CE365b504a1C9E1cEce32316F3e7`

WEB 3.0 FIR Website Link: `https://web3-fir.netlify.app/`
## Installation

Install my-project-name with npm

```bash
  cd my-project-name
  npm Install
  npm run dev
```
    
## Deployment

To deploy this project run

```bash
  npm run deploy
```

