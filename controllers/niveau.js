const Niveau = require("../models/Niveau");

exports.all = (req, res, next) => {
	Niveau.find()
		.then((niveaux) => {
			if (niveaux.length > 0) {
				return res.status(200).json({
					status: "success",
					payload: niveaux,
					message: "",
				});
			}
			return res.status(200).json({
				status: "success",
				payload: niveaux,
				message: "Aucun niveau n'a été enrégistré !",
			});
		})
		.catch((error) =>
			res.status(500).json({
				status: "fail",
				payload: [],
				message: error.message,
			})
		);
};

exports.single = (req, res, next) => {
	Niveau.findOne({ _id: req.params.id })
		.then((niveau) =>
			res
				.status(200)
				.json({ status: "success", payload: niveau, message: "" })
		)
		.catch((error) =>
			res.status(404).json({
				status: "fail",
				payload: [],
				message: "Niveau introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const niveau = new Niveau({
		...req.body,
	});
	niveau
		.save()
		.then(() =>
			res.status(201).json({
				status: "success",
				payload: niveau,
				message: "Niveau ajouté !",
			})
		)
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter le niveau !",
			})
		);
};

exports.edit = (req, res, next) => {
	Niveau.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((niveau) =>
			res.status(200).json({
				status: "success",
				payload: niveau,
				message: "Reservation modifié",
			})
		)
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier le niveau !",
			})
		);
};

exports.remove = (req, res, next) => {
	Niveau.deleteOne({ _id: req.params.id });
};
