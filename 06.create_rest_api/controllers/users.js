const User = require('../models/User');

async function handleGetAllUsers(req, res) {
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
}

async function handleUpdateUserById(req, res) {
    try {
        const updatedItem = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedItem) {
          return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json({ message: "Item updated successfully", updatedItem });
      } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Server error", details: error.message });
      }
}

async function handleDeleteUserById(req, res) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
  
    return res.status(204).json({ msg: "Deleted" });
}

async function handleCreateUser(req, res) {
    const body = req.body;

  if (!body.firstname || !body.lastname || !body.email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const result = await User.create({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    job_title: body.job_title ?? "",
  });

  return res.status(201).json({ msg: "Created", id: result._id });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}