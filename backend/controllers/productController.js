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

// @desc    Create a product
// @route   POST /api/products/
// @access  private/admin
export const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'Sample name',
		price: 0,
		user: req.user._id,
		image: '/images/sample.jpg',
		brand: 'Sample brand',
		category: 'Sample category',
		countInStock: 0,
		numReviews: 0,
		description: 'Sample description',
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

// @desc    Create a product
// @route   POST /api/products/:id
// @access  private/admin
export const updateProduct = asyncHandler(async (req, res) => {
	const {
		name,
		price,
		description,
		image,
		brand,
		category,
		countInStock,
	} = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.description = description;
		product.image = image;
		product.brand = brand;
		product.category = category;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});
