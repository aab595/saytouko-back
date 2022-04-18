const Classe = require("../models/Classe");

exports.all = (req, res, next) => {
	Classe.find()
		.then((classes) => {
			res.status(200).json({
				status: "success",
				payload: classes,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Aucune classe n'a été enrégistrée !",
			})
		);
};

exports.single = (req, res, next) => {
	Classe.findOne({ _id: req.params.id })
		.then((classe) => {
			res.status(200).json({
				status: "success",
				payload: classe,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Classe introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const classe = new Classe({ ...req.body });
	classe
		.save()
		.then((classe) => {
			res.status(201).json({
				status: "success",
				payload: classe,
				message: "Classe bien ajoutée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter la classe !",
			})
		);
};

exports.edit = (req, res, next) => {
	Classe.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((classe) => {
			res.status(200).json({
				status: "success",
				payload: classe,
				message: "Classe modifiée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier la classe !",
			})
		);
};

exports.remove = (req, res, next) => {
	Classe.deleteOne({ _id: req.params.id })
		.then((classe) => {
			res.status(200).json({
				status: "success",
				payload: classe,
				message: "Classe supprimée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer la classe !",
			})
		);
};
