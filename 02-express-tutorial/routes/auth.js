const express = require("express");

const router = express.Router();

// export controller
const { login } = require("../controllers/auth");

// router.post("/", login);

router.route("/").post(login);

module.exports = router;
