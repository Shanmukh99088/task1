const jwtmod = require("jsonwebtoken");

module.exports = async function(req, res, next) {
    // const bearerHeader = await req.headers["authorization"];
    // console.log(bearerHeader);
    // const token = bearerHeader && bearerHeader.split(" ")[1];
    // if (token === null) return res.sendStatus(401);
  
    // const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;
  
    // try {
    //   const decodedToken = jwtmod.verify(token, public_key, {
    //     algorithms: ["RS256"],
    //   });
    
    //   const { email } = decodedToken;
    //   req.user = email;
    //   console.log(email)
    //   next();
    // } catch (error) {
    //   return res.status(401).send("Invalid token");
    //}
    console.log(req);
  };