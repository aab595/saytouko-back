const Matiere = require("../models/Matiere");

exports.all = (req, res, next) => {
	Matiere.find()
		.then((matieres) => {
			res.status(200).json({
				status: "success",
				payload: matieres,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Aucune matière n'a été enrégistrée !",
			})
		);
};

exports.single = (req, res, next) => {
	Matiere.findOne({ _id: req.params.id })
		.then((matiere) => {
			res.status(200).json({
				status: "success",
				payload: matiere,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Matière introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const matiere = new Matiere({ ...req.body });
	matiere
		.save()
		.then((matiere) => {
			res.status(201).json({
				status: "success",
				payload: matiere,
				message: "Matière bien ajoutée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter la matière !",
			})
		);
};

exports.edit = (req, res, next) => {
	Matiere.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((matiere) => {
			res.status(200).json({
				status: "success",
				payload: matiere,
				message: "Matière modifiée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier la matière !",
			})
		);
};

exports.remove = (req, res, next) => {
	Matiere.deleteOne({ _id: req.params.id })
		.then((matiere) => {
			res.status(200).json({
				status: "success",
				payload: matiere,
				message: "Matière supprimée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer la matière !",
			})
		);
};
