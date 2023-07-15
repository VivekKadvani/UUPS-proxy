# UUPS[ EIP-1822 Universal Upgradeable Proxy] proxy pattern

##UUPS
(Universal Upgradeable Proxy Standard) includes the upgrade functionality in the logic implementation contract. Because the upgrade mechanism is in the implementation, later versions can remove related logic to disable future upgrades. All calls are forwarded from the proxy contract to the logic implementation.

![altimage](https://images.ctfassets.net/v0qht4wq59vi/2JNaV0A774jV7iToFHpioE/9214d6bc2df67badac40f32e4efd3d9a/Upgradeable_proxy_contract_security_best_practices_-_Blog_Post.png)

## What it includes
- In this repo there are two way of UUPS proxy
 1. using hardhat
    This is the method that can we deploy it using script and that we can override old logic with new logic using deployProxy.
 2. directly through contract with remix
    In this way we implement proxy using contract side implementation and logicc will be change by calling proxy contract.

## Usage 
1. Using hardhat  
  - In this mwthod you can first change contract in directory
  - than also change perticular deploy script naming and all.
  - After than you can deploy your v1 contract .
  - than run verify script and verify it.
  - after that you can run your script and deploy v2 contract.
  - it is not more proper way as per my opinion.
2. Using Contract
  - In this way you need to implement and deploy first logic contract which is structered as per UUPS and verify it.
  - make sure that thre is initialize() function you must call it just after deploying it.
  - than you need to deploy proxy contract in that you need to pass two argument first is constructdata and second is  logic contract address.
  - here we can get construct data by
    ```
    web3.utils.sha3('initialize()').substr(0,10)
    ```
  - than you can pass it to constructor and deploy proxy
  - make sure your logic contract is verified
  - after that if you need to change it make one new logic contract and in that you must follow order of variable as old logic contract.
  - than deploy it and verify it ,also verify proxy on etherscan
  - after that you must call initialize() function
  - and than we can call updateCode() function and passing new logic contract address.
  - and our contract is upgraded with new logic.
  - and again verify proxy  
