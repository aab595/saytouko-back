const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
	{
		matiere: {
			type: mongoose.Types.ObjectId,
			ref: "Matiere",
			required: true,
		},
		salle: {
			type: mongoose.Types.ObjectId,
			ref: "Salle",
		},
		debut: {
			type: Date,
			required: true,
		},
		fin: {
			type: Date,
			required: true,
		},
		couleur: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
