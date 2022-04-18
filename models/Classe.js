const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const classeSchema = new Schema(
	{
		libelle: { type: String, required: true },
		capacite: Number,
		niveaux: { type: [Schema.Types.ObjectId], ref: "Niveau" },
		cycle: String,
		commentaire: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Niveau", classeSchema);
