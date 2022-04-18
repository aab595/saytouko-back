const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		nomComplet: {
			type: String,
			required: true,
		},
		profil: {
			type: String,
			required: true,
		},
		dateNaiss: {
			type: Date,
			required: true,
		},
		sexe: {
			type: String,
			enum: ["Masculin", "Féminin"],
		},
		email: {
			type: String,
			unique: true,
		},
		telephone: {
			type: String,
			unique: true,
		},
		adresse: String,
		dateEntree: {
			type: Date,
			default: Date.now(),
		},
		photo: String,
		role: {
			type: String,
			required: true,
		},
		nomUtilisateur: {
			type: String,
			required: true,
		},
		motDePasse: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
