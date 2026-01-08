// const { default: Logout } = require("../../dashboard/src/components/Logout");
const { Signup,Login,Logout } = require("../controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.options('/logout',Logout);

module.exports = router;