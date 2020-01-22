/* eslint-disable strict */
var userManagementService = require("../services/userManagement.service");

async function registerUser(req, res) {
  const { emailId, password, firstName, lastName, phoneNumber } = req.body;

  try {
    const response = await userManagementService.registerUser({
      emailId,
      password,
      firstName,
      lastName,
      phoneNumber
    });
    console.log(response);
    if (response === "Registered Successfully") {
      res.send(response);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

async function login(req, res) {
  const { emailId, password } = req.body;

  try {
    const response = await userManagementService.login({
      emailId,
      password
    });
    if (response === "Login Success") {
      res.send(response);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

async function resetPassword(req, res) {
  const { emailId, password } = req.body;

  try {
    const response = await userManagementService.resetPassword({
      emailId,
      password
    });

    if (response === "Reset Password Success") {
      res.send(response);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

async function changePassword(req, res) {
  const { emailId, oldPassword, newPassword } = req.body;

  try {
    const response = await userManagementService.changePassword({
      emailId,
      password
    });
    if (response === "Change Password Success") {
      res.send(response);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = {
  registerUser,
  login,
  resetPassword,
  changePassword
};
