const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const salleSchema = new Schema(
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
