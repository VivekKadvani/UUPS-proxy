const { expect } = require('chai');

describe('Lock', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  describe('Deployment', function () {
    it('Chheck deployed contract', async function () {
      expect(await lock.unlockTime()).to.equal(unlockTime);
    });
  });
});
