const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	shopName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
	displayName: {
		type: String,
	},
	role: {
		type: String,
	},
})

module.exports = User = mongoose.model('user', userSchema)
