const { body, validationResult } = require('express-validator');
const  express  = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) =>{  // authenticated user
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);
    console.log(authHeader);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.username;
            next();
        }
    )
}