# RareSkills - Week5

```
npx hardhat test
```

## Day1 - Warmup

### Ethernaut - Hello Ethernaut
https://github.com/zigtur/Ethernaut-Solutions/blob/master/solutions.md#hello-ethernaut

### Ethernaut - Fallback
https://github.com/zigtur/Ethernaut-Solutions/blob/master/solutions.md#fallback

### Ethernaut - Fallout
https://github.com/zigtur/Ethernaut-Solutions/blob/master/solutions.md#fallout

### Capture The Ether - Guess The Number
On-chain data are all **public**. Even if it has the *private* keyword, all can be read from off-chain world. Knowing that, we can read the storage slot that contains the answer.

Using ethers library in JS allows to read all the storage slots:

```
let number = await ethers.provider.getStorageAt(contract.address, BigNumber.from("0"));
```



## Day2 - Insecure Randomness
### Ethernaut - Coin Flip
https://github.com/zigtur/Ethernaut-Solutions/blob/master/solutions.md#coin-flip \
https://github.com/zigtur/Ethernaut-Solutions#coin-flip

### Capture The Ether - Guess the random number
The way I did the exploit for "Guess The Number" challenge just resolve this challenge too!


## Day3 - View function errors
### Ethernaut - Elevator
https://github.com/zigtur/Ethernaut-Solutions/blob/master/solutions.md#elevator \
https://github.com/zigtur/Ethernaut-Solutions#elevator

### Ethernaut - Shop

https://github.com/zigtur/Ethernaut-Solutions/blob/master/solutions.md#shop \
https://github.com/zigtur/Ethernaut-Solutions#shop

## Day4 - Unsafe number casting
### Capture The Ether - Guess the secret number
There are only 256 values possibles for a uint8 (0 to 255). We just need to test all values and find the number that gives the answer hash.



### Capture The Ether - Guess the new number




