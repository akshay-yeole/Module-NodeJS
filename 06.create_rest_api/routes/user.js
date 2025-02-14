const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../controllers/users");

//Routes
router.route("/")
  .get(handleGetAllUsers)
  .post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .put(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
