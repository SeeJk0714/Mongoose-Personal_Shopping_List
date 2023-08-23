const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/shoppinglist")
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

const itemRouter = require("./routes/item");

app.use("/items", itemRouter);

app.get("/",(req,res) => {
    res.send("<a href='/items'>Items</a>")
})

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});