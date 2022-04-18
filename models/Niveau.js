const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const niveauSchema = new Schema(
	{
		niveau: {
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
