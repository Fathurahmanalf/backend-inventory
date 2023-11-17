const { Product, Version, User } = require("../../../models")

// GET all Product data

module.exports = async (req, res)=>{
  const data = await Product.findAll({include:[Version, User]});
  return res.json(data)
};