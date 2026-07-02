const express = require("express");
const app = express();
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("server running at 5000");
});
