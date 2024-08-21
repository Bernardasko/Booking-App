const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
})
);


mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error creating user" });
    }
  });

app.listen(4000, () => console.log("Server started on port 4000"));
