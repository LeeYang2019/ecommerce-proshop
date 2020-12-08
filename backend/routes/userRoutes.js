import express from 'express';
const router = express.Router();

import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	updateUser,
	getUserById,
} from '../controllers/userController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, isAdmin, getUsers);
router.route('/login').post(authUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

router
	.route('/:id')
	.delete(protect, isAdmin, deleteUser)
	.put(protect, isAdmin, updateUser)
	.get(protect, isAdmin, getUserById);

export default router;
