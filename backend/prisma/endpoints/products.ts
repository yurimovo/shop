import express from 'express';
import { PrismaClient } from '@prisma/client';

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

app.get('/')

const server = app.listen(3000);

export default prisma;