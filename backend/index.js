const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose
  .connect(
     process.env.MONGODB_URI
  )
  .then(() => console.log("DB connected successfully"))
  .catch((e) => console.log(e));

const taskRoutes = require("./routes/task.route");
app.use("/tasks", taskRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});