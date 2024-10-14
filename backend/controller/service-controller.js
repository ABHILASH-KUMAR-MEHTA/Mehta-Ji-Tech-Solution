const Service = require ("../models/service-model")


const services = async (req,res) =>{
  try {
    const response = await Service.find();
    res.status(200).json({msg:response});
    if(!response){
      res.status(404).json({msg:"no service found"});
      return;
    }
  } catch (error) {
    console.log(`service: ${error}`)
  }
}

module.exports = services;