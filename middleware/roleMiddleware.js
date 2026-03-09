const authorizeRoles = (...roles)=>{
    return (req,res,next)=>{
        if(!req.user){
            return res.status(403).json({message: "Access denied"});
        }
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message: `Role ${req.user.role} is not allowed to access this resource`});
        }
        next(); //allow access if the role is authorized
    }
}

module.exports = {authorizeRoles};