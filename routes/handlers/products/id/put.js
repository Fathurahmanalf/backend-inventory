const { Product, Version, Log } = require("../../../../models");

module.exports = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findByPk(productId, {
        include: [Version, Log],
    });

    if (!product)
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });

    try {
        // Update data di tabel Product dan Version
        await product.update({
            productName: req.body.productName,
        });

        // Update data di tabel Version
        const version = product.Version; 
        await version.update({
            versionName: req.body.versionId,
        });

        // Update data di tabel Log
        const log = product.Logs[0]; 
        await log.update({
            qty: req.body.qty,
        });


        return res.json(product);
    } catch (error) {
        
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}
