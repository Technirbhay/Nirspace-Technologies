import jwt from "jsonwebtoken";

export const adminLogin = async (req,res)=>{

const {email,password} = req.body;

if(
email === "nirbhaykeeda@nirspace.com" &&
password === "Nirbhay@121212"
){

const token = jwt.sign(
{role:"admin"},
process.env.JWT_SECRET,
{expiresIn:"1d"}
);

return res.json({token});

}

return res.status(401).json({
message:"Invalid credentials"
});

};