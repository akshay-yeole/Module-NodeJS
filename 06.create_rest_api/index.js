const express = require("express");
const userRouter = require("./routes/user");
const { connectMongoDB } = require("./core/connection");
const { requestLogs } = require("./middlewares");

const PORT = 3000;
const app = express();

//Connect to MongoDB
connectMongoDB("mongodb://localhost:27017/nodejs-demo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

//middleware
app.use(express.json());
app.use(requestLogs("app-logs.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
