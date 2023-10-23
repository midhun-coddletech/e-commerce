/* eslint-disable linebreak-style */

const express = require('express');
require('dotenv').config();

const app = express();
const path = require('path');

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const customerRoutes = require('./routes/customer');
const adminRoutes = require('./routes/admin');

app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/customer', customerRoutes);
app.use('/admin', adminRoutes);
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT);
