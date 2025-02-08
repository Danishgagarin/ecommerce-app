const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
require("./connection");

app.use(express.json());

const ProductModel = require("./models/product");

app.get('/', (req, res) => {
    res.send("Welcome to the Product API!");
});

app.get('/trial', (req, res) => {
    res.send("Trial route working!");
});

app.post('/add', async (req, res) => {
    try {
        await ProductModel(req.body).save();
        res.send({ message: "Product Added Successfully" });
    } catch (error) {
        console.error("Error while adding product:", error);
        res.status(500).send({ message: "Error while adding product" });
    }
});

app.get('/view', async (req, res) => {
    try {
        const products = await ProductModel.find();
        const formattedProducts = products.map((product) => ({
            _id: product._id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: product.rating,
            __v: product.__v,
        }));
        res.send(formattedProducts);
    } catch (error) {
        console.error("Error while fetching products:", error);
        res.status(500).send({ message: "Error while fetching products" });
    }
});

app.delete('/remove/:id', async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id);
        res.send({ message: "Product Deleted Successfully" });
    } catch (error) {
        console.error("Error while deleting product:", error);
        res.status(500).send({ message: "Error while deleting product" });
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({ message: "Product Updated Successfully", updatedProduct });
    } catch (error) {
        console.error("Error while updating product:", error);
        res.status(500).send({ message: "Error while updating product" });
    }
});

app.listen(8012, () => {
    console.log("The server is running on port 8012");
});
