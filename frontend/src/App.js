import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserListScreen from './screens/ListScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/login" component={LoginScreen} exact />
					<Route path="/register" component={RegisterScreen} exact />
					<Route path="/profile" component={ProfileScreen} exact />
					<Route path="/products/:id" component={ProductScreen} exact />
					<Route path="/cart/:id?" component={CartScreen} exact />
					<Route path="/admin/userlist" component={UserListScreen} exact />
					<Route path="/" component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
