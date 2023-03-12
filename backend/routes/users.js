const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();
const app = express();

app.post('/create-user', async (req, res) => {
    const { email, username, password, name } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                email,
                username,
                password,
                name
            },
        });
        res.json(user);
    } catch (e) {
        console.log(e);
    }
});

app.get('/users-list', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
});

module.exports = app;