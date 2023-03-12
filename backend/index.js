const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/users.js'));
app.use('/api/products', require('./routes/products.js'));

app.listen(5000, () =>
  console.log('REST API server ready at: http://localhost:5000'),
);