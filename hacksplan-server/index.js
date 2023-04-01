require('dotenv').config();
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

//body-parse
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// cors 
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.json());

// routers
app.use("/api/auth",require("./routes/auth/auth"));
app.use("/api/users",require("./routes/user/user"));

// Middleware
const middleware = (req, res, next) => {
  console.log("Hello my hacksplan middleware!");
  next();
}

app.get('/',middleware, (req, res) => {
  console.log("Hello Hacksplan!!");
  res.send('API From Hacksplan!!')
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));