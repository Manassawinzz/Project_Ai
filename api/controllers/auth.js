const db = require("../db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const register = async (req, res) => {
  
  const q = "SELECT * FROM user WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const q =
      "INSERT INTO user (email, username, password, balance, equity, commission) VALUES (?)";
    const values = [req.body.email, req.body.username, req.body.password, 0, 0, 0];

    db.query(q, [values], (err, data) => {
      if (err) {
        res.json(err);
      }
      res.status(200).json("User has been created. ");
    });
  });
};

const login = (req, res) => {
  const q = "SELECT * FROM user WHERE email = ?"
  db.query(q,[req.body.email], (err,data)=>{
    if(err) return res.json(err);
    if (data.length == 0) return res.status(404).json("User not found!");

    const CheckPassword = req.body.password
    if(data[0].password != CheckPassword) return res.status(400).json("Wrong username or Password")

    const token = jwt.sign({id: data[0].email},"jwtkey");
    const {password, ...other} = data[0];

    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(other);
    
  })
};

const logout = (req, res) => {
  res.status(200).json("OK")
};

module.exports = {
  register,
  login,
  logout,
};
