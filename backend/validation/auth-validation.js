const { z } = require("zod");

const signupScheme = z.object({
   username:z.string({ required_error:"Name is required"}).trim().min(3,{message:"Name must be at least of 3 chars."}).max(50,{message:"Name must be 50 chars."}),
   
   email:z.string({ required_error:"Email is required"}).trim().email({message:"Invalid email address"}).min(3,{message:"Email must be at least of 3 chars."}).max(20,{message:"Email must be not more than 20 chars."}),

   phone:z.string({ required_error:"Phone is required"}).trim().min(10,{message:"Phone must be at least of 10 number ."}).max(10,{message:"Phone must be not more than 10 number ."}),

   password:z.string({ required_error:"Password is required"}).min(8,{message:"Password must be at least of 8 chars."}).max(50,{message:"password must be not more than 50 chars."})
})

const loginScheme = z.object({
   email:z.string({ required_error:"Email is required"}).trim().email({message:"Invalid email address"}).min(3,{message:"Email must be at least of 3 chars."}).max(20,{message:"Email must be not more than 20 chars."}),

   password:z.string({ required_error:"Password is required"}).min(8,{message:"Password must be at least of 8 chars."}).max(50,{message:"password must be not more than 50 chars."})
})

module.exports = {signupScheme,loginScheme}
