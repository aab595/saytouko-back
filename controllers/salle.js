const Salle = require("../models/Salle");

exports.all = (req, res, next) => {
	Salle.find()
		.then((salles) => {
			res.status(200).json({
				status: "success",
				payload: salles,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Aucune salle n'a été enrégistrée !",
			})
		);
};

exports.single = (req, res, next) => {
	Salle.findOne({ _id: req.params.id })
		.then((salle) => {
			res.status(200).json({
				status: "success",
				payload: salle,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Salle introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const salle = new Salle({ ...req.body });
	salle
		.save()
		.then((salle) => {
			res.status(201).json({
				status: "success",
				payload: salle,
				message: "Salle bien ajoutée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter la salle !",
			})
		);
};

exports.edit = (req, res, next) => {
	Salle.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((salle) => {
			res.status(200).json({
				status: "success",
				payload: salle,
				message: "Salle modifiée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier la salle !",
			})
		);
};

exports.remove = (req, res, next) => {
	Salle.deleteOne({ _id: req.params.id })
		.then((salle) => {
			res.status(200).json({
				status: "success",
				payload: salle,
				message: "Salle supprimée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer la salle !",
			})
		);
};
