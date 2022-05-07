const mongoose = require("mongoose");

const classeSchema = new mongoose.Schema(
	{
		libelle: {
			type: String,
			required: true,
		},
		capacite: Number,
		niveau: {
			type: mongoose.Types.ObjectId,
			ref: "Niveau",
		},
		commentaire: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Classe", classeSchema);
