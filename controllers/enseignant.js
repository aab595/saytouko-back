const Enseignant = require("../models/Enseignant");

exports.all = (req, res, next) => {
	Enseignant.find()
		.then((enseignants) => {
			if (enseignants.length > 0) {
				return res.status(200).json({
					status: "success",
					payload: enseignants,
					message: "",
				});
			}
			return res.status(200).json({
				status: "success",
				payload: enseignants,
				message: "Aucun enseignant n'a été enrégistré !",
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
	Enseignant.findOne({ _id: req.params.id })
		.then((enseignant) => {
			res.status(200).json({
				status: "success",
				payload: enseignant,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Enseignant introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const enseignant = new Enseignant({ ...req.body });
	enseignant
		.save()
		.then((enseignant) => {
			res.status(201).json({
				status: "success",
				payload: enseignant,
				message: "Enseignant bien ajouté !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter l'enseignant !",
			})
		);
};

exports.edit = (req, res, next) => {
	Enseignant.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((enseignant) => {
			res.status(200).json({
				status: "success",
				payload: enseignant,
				message: "Enseignant modifié !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier l'enseignant !",
			})
		);
};

exports.remove = (req, res, next) => {
	Enseignant.deleteOne({ _id: req.params.id })
		.then((enseignant) => {
			res.status(200).json({
				status: "success",
				payload: enseignant,
				message: "Enseignant supprimé !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer l'enseignant !",
			})
		);
};
