const { Log } = require("../../../models")

// GET all logs data

module.exports = async (req, res)=>{
  const log = await Log.findAll();
  return res.json(log)
};
