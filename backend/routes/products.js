const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();
const app = express();

app.post('/create-product', async (req, res) => {
    const { name, price, info, quantity } = req.body;
    try {
        const product = await prisma.product.create({
            data: {
                name,
                price,
                info,
                quantity
            },
        });
        res.json(product);
    } catch (e) {
        console.log(e);
    }
});

module.exports = app;