import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc    Get all products
// @route   GET /api/products
// @access  public
export const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

// @desc    Get product by id
// @route   GET /api/products/:id
// @access  public
export const getProductbyId = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(404);
		throw new Error('Product not found');
	}
	res.json(product);
});

// @desc    Delete a product
// @route   Delete /api/products/:id
// @access  private/admin
export const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		await product.remove();
		res.json({ message: 'Product Removed' });
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});
