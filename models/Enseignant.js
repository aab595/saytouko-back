const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const enseignantSchema = new Schema(
	{
		nom: {
			type: String,
			required: true,
		},
		prenom: {
			type: String,
			required: true,
		},
		classes: {
			type: [Schema.Types.ObjectId],
			ref: "Classe",
		},
		dateNaiss: Date,
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
		adresse: {
			pays: String,
			ville: String,
			quartier: String,
		},
		dateEntree: {
			type: Date,
			default: Date.now(),
		},
		dateSortie: Date,
		photo: String,
		nomUtilisateur: {
			type: String,
			unique: true,
			required: true,
		},
		motDePasse: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Teacher", enseignantSchema);
