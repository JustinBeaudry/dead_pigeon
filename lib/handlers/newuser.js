/*
 *    New User Route
 *
 *
 *     This route is a hidden dev route. Which is not activate unless in the dev env
 */

exports.newUser = function () {
  // accepts binaries and passphrase from the client

  function processCredentials (passphrase, binary) {
    // binary is a file from the client, it is used in conjuction with the passphrase to generate a hash
    // passphrase is store the same as a message however it begins with a special block of chars that are limites to passes
    this.passphrase = passphrase;
    this.binary = binary;
  }

  function validateNewUser () {
    // as this is a dev only function there should be preventative
    // -measures to ensuring only users who are allowed
    // -by admin will be generated into the system.
    // NOTE:  maybe even tricking the user into thinking that they
    // -have actually been stored into the filesystem
    // new users should be validated before being stored
  }

  function processNewUser () {

  }

  function storeNewUser () {
    // stores the hashed username into the `/fs` filesystem.
  }

  // returns a reply to the client, letting them know that the user has been created
};