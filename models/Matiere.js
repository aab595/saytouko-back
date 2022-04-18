const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const matiereSchema = new Schema(
	{
		nomClasse: {
			type: String,
			required: true,
		},
		enseignant: {
			type: Schema.Types.ObjectId,
			ref: "Enseignant",
			required: true,
		},
		noteMax: {
			type: Number,
			default: 20,
		},
		regroupement: String,
		nomMatiere: {
			type: String,
			required: true,
		},
		abreviation: {
			type: String,
			required: true,
		},
		coefficient: {
			type: Number,
			required: true,
		},
		couleur: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Matiere", matiereSchema);
