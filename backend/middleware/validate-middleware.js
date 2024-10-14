const validate = (schema) => async(req,res,next) => {
try {
  const parseBody = await schema.parseAsync(req.body);
  req.body = parseBody;
  next();
} catch (err) {
  const status = 422;
  const message =" Filled the input correctly"
  const extraDetails = err.errors[0].message;

const error = {
  status, message,extraDetails,
}

  console.log(error)
  res.status(400).json({msg:message,extraDetails})
}
}

module.exports = validate