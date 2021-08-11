const { Router } = require("express");
const { userController } = require("../controllers/user.controller");

const router = Router();

router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserOne);
router.post("/user", userController.addUser);
router.post("/user/:id", userController.editUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user/:userId/books/:bookId", userController.rentBookUser);


module.exports = router;
