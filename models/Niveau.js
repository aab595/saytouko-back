const mongoose = require("mongoose");

const niveauSchema = new mongoose.Schema(
	{
		libelle: {
			type: String,
			unique: true,
			required: true,
		},
		cycle: {
			type: String,
			enum: ["Cycle 1", "Cycle 2", "Cycle 3"],
			required: true,
		},
		commentaire: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Niveau", niveauSchema);
