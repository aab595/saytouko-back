const mongoose = require("mongoose");

const matiereSchema = new mongoose.Schema(
	{
		libelle: {
			type: String,
			required: true,
		},
		enseignant: {
			type: mongoose.Types.ObjectId,
			ref: "Enseignant",
			required: true,
		},
		categorie: String,
		abreviation: {
			type: String,
			required: true,
		},
		coefficient: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Matiere", matiereSchema);
