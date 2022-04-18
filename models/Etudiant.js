const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const etudiantSchema = new Schema(
	{
		nom: {
			type: String,
			required: true,
		},
		prenom: {
			type: String,
			required: true,
		},
		parent: {
			type: Schema.Types.ObjectId,
			ref: "Parent",
			required: true,
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
		classe: {
			type: Schema.Types.ObjectId,
			ref: "Classe",
		},
		numeroInscription: String,
		nomUtilisateur: {
			type: String,
			required: true,
		},
		motDePasse: {
			type: String,
			required: true,
		},
		photo: String,
		remarque: String,
		dateEntree: {
			type: Date,
			default: Date.now(),
		},
		dateSortie: Date,
		handicap: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Etudiant", etudiantSchema);
