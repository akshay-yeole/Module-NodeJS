const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const app = express();

//Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/nodejs-demo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB Error: ", err);
  });

//Schema
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  job_title: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

//Middleware
app.use(express.json());

//Dummy Middleware
app.use((req, res, next) => {
  console.log("Middleware is running");
  next();
});

//HttpGet
app.get("/api/users", async (req, res) => {
  const allUsers = await User.find({});
  return res.status(200).json(allUsers);
});

//HttpGet
app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.status(200).json(user);
});

//HttpPost
app.post("/api/users", async (req, res) => {
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

  return res.status(201).json({ msg: "Created" });
});

//HttpPut
app.put("/api/users/:id", async (req, res) => {
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
});

//HttpDelete
app.delete("/api/users/:id", async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(204).json({ msg: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
