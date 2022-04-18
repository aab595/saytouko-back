const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const parentSchema = new Schema(
	{
		nom: {
			type: String,
			required: true,
		},
		prenom: {
			type: String,
			required: true,
		},
		profession: String,
		enfants: {
			type: [Schema.Types.ObjectId],
			ref: "Etudiant",
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		telephone: String,
		adresse: {
			pays: String,
			ville: String,
			quartier: String,
		},
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
		frequenceFacturation: String,
		typePaiement: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Parent", parentSchema);
