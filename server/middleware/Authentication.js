const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "SecretKey"
const Authentication = async(req,res,next) => {
    const token = req.headers.authorization;
    try{    
        if(!token) {
            return res.status(401).json({message:'Invalid token'});
        }

        const decoded = jwt.verify(token,JWT_SECRET)
        
        req.user = decoded
        next();
    }catch(err){
        return res.status(401).json({message:'Invalid authorization'});
    }
}   

modules.exports = Authentication;