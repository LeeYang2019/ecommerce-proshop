import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProdcucts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};

		fetchProdcucts();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} ex={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
