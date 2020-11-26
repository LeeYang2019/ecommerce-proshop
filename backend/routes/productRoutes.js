import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

// import model
import Product from '../models/productModel.js';

// @desc    GET all products
// @route   GET /api/products
// @access  Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find();
		res.status(200).json(products);
	})
);

// @desc    GET a product
// @route   GET /api/products/:id
// @access  public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404).json({ message: 'Product not found' });
		}
	})
);

export default router;
