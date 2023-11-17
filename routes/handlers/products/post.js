const { Product, Log } = require('../../../models')

module.exports = async (req, res) => {

    const body = req.body;
    console.log("Cek Body=====>",body)


    // Validation User Input
    if (!body.versionId || !body.qty || !body.productName)
        return res.status(400).json({
            message: "Name Product data must be provided"
        });

    const dataProduct = {versionId:body.versionId, productName:body.productName, userId:req.user.id}
    const dbProduct = await Product.create(dataProduct)

    const dataLog = {productId:dbProduct.id, qty:body.qty, userId:req.user.id}
    const dbLog = await Log.create(dataLog)
    
    return res.json({})
}