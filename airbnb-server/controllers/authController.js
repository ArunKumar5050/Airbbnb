const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;


const loginUser = async (req, res) => {
    const { username, password } = req.body;
    

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        let token;
        try {
            token = jwt.sign(
                { userid: user._id },
                secretKey,
                { expiresIn: "7d" }
            );
        } catch (jwtError) {
            console.error("Error generating JWT:", jwtError);
            return res.status(500).json({ message: "Error generating token" });
        }

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Server error" });
    }
};


const signupUser = async(req,res)=>{
    try{

        const {name,username,email,password} = req.body;
        console.log(req.body)
        const user = new User({
            name,
            username,
            email,
            password
        })
        console.log(user);
        await user.save();
        console.log("User Created Successfully")
        res.status(201).json({ message: "User created successfully" });
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err.message})
    }
};



module.exports = { loginUser , signupUser };