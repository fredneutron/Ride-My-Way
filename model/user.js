import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSet= new Schema({
	name: {
		type: String,
		required: [true,'Name field is required']
	},
	email: {
		type: String,
		required: [true, 'Email field is required']
	},
	gender: {
		type: String,
		required: [true,'User type is required']
	},
	dob: {
		type: String,
		required: [true,'User type is required']
	},
	picture: {
		type: String,
		required: [false]
	},
	password: {
		type: String,
		required: [true,'User type is required']
	},
	userType: {
		type: String,
		required: [true,'User type is required']
	}
});
const user = mongoose.model('user',userSet);

export default user;