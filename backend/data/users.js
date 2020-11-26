import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.come',
		password: bcrypt.hashSync('123456', 10),
		idAdmin: true,
	},
	{
		name: 'John Doe',
		email: 'jdoe@gmail.come',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Lee Yang',
		email: 'leeyang@gmail.come',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
