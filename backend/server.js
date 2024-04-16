const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
module.exports = app;
app.use(
  cors({
    exposedHeaders: "Content-Range",
  })
);
app.use("/", userRoutes);
mongoose
  .connect(
    "mongodb+srv://cengiz:1234567890@cluster0.ltqnqwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => {
    console.log("connected");
    app.listen(5000, () => {
      console.log("server started on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("<h1>asd</h1>");
});
