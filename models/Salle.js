const mongoose = require("mongoose");

const salleSchema = new mongoose.Schema(
	{
		libelle: {
			type: String,
			unique: true,
			required: true,
		},
		capacite: Number,
		commentaire: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Salle", salleSchema);
