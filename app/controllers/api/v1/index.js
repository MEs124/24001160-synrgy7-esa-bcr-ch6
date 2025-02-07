/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const postController = require("./postController");
const authController = require("./authController");
const carsController = require("./carsController");

module.exports = {
  postController,
  authController,
  carsController,
};
