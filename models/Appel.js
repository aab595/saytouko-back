const mongoose = require("mongoose");

const appelSchema = new mongoose.Schema(
	{
		classe: {
			type: mongoose.Types.ObjectId,
			ref: "Classe",
			required: true,
		},
		date: {
			type: Date,
			default: Date.now(),
			required: true,
		},
		presence: {
			type: String,
			enum: [
				"Présent",
				"Absence injustifiée",
				"Absence justifiée",
				"Absent",
			],
			required: true,
		},
		commentaire: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Appel", appelSchema);
