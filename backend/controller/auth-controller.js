
const User = require("../models/user-model")
const bcrypt = require("bcryptjs")


const home = async(req,res)=>{
try {
    res.status(200).send("hello i m here with abhi")
  
} catch (error) {
  console.log(error)
}
}  

const yansh = async (req,res) => {
  try {
    // console.log(req.body)
    const {username, email, phone,password} = req.body;
    const userExist = await User.findOne({email})

    if(userExist){
      return res.status(400).json({message:"email already exists"})
    }


    // 

    const createUser = await User.create({username, email, phone, password})
    res.status(200).json({msg: "registtration successful", token : await createUser.generateToken(),
      userId: createUser._id.toString(),
    });

  } catch (error) {
    next(error)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: 'Invalid Try' }); // Add return to stop further execution
    }

    const isPasswordCorrect = await userExist.comparePassword(password);
    
    if (isPasswordCorrect) {
      return res.status(201).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      }); // Return here to stop further execution
    } else {
      return res.status(401).json({ message: "Invalid email or password" }); // Return here to stop further execution
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' }); // Add return here too
  }
};


const user = async (req,res) => {
  try {
    const userData = req.user;
     console.log(userData)
  return res.status(200).json({ userData})
  } catch (error) {
    console.log(`error from user ${error}`)
  }
};


module.exports = {home, yansh, login,user}