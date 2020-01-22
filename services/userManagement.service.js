var request = require("request-promise");
var fs = require("fs");

async function register() {
  try {
    //Register Function
    return "Registered Successfully";
  } catch (e) {
    throw e;
  }
}

async function login() {
  try {
    //Login Function
    return "Login Success";
  } catch (e) {
    throw e;
  }
}

async function resetPassword() {
  try {
    //reset Password Function
    return "Reset Password Success";
  } catch (e) {
    throw e;
  }
}

async function changePassword() {
  try {
    //change Password Function
    return "Change Password Success";
  } catch (e) {
    throw e;
  }
}
