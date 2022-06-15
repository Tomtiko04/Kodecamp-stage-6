const jwt = require("jsonwebtoken");

const check = (req, res, next) => {


    if (req.headers.authorization) {

        if (req.headers.authorization.split(" ")[0] === "Bearer") {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, process.env.jwtKey, (err, payload) => {
                if (err) {
                    console.log(err);
                }
                console.log(payloadd);

                next();
            });
        }
    } else {
        res.send("You are not authorized access to this routes");
    }
};

module.exports = { check };