const Appel = require("../models/Appel");

exports.all = (req, res, next) => {
	Appel.find()
		.then((appels) => {
			res.status(200).json({
				status: "success",
				payload: appels,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Aucun appel n'a été enrégistré !",
			})
		);
};

exports.single = (req, res, next) => {
	Appel.findOne({ _id: req.params.id })
		.then((appel) => {
			res.status(200).json({
				status: "success",
				payload: appel,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Appel introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const appel = new Appel({ ...req.body });
	appel
		.save()
		.then((appel) => {
			res.status(201).json({
				status: "success",
				payload: appel,
				message: "Appel bien ajouté !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter l'appel !",
			})
		);
};

exports.edit = (req, res, next) => {
	Appel.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((appel) => {
			res.status(200).json({
				status: "success",
				payload: appel,
				message: "Appel modifié !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier l'appel !",
			})
		);
};

exports.remove = (req, res, next) => {
	Appel.deleteOne({ _id: req.params.id })
		.then((appel) => {
			res.status(200).json({
				status: "success",
				payload: appel,
				message: "Appel supprimé !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer l'appel !",
			})
		);
};
