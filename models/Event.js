const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const eventSchema = new Schema(
	{
		matiere: {
			type: Schema.Types.ObjectId,
			ref: "Matiere",
			required: true,
		},
		couleur: String,
		salle: {
			type: Schema.Types.ObjectId,
			ref: "Salle",
		},
		enseignant: {
			type: Schema.Types.ObjectId,
			ref: "Enseignant",
			required: true,
		},
		debut: {
			type: Date,
			required: true,
		},
		fin: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
