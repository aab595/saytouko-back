const Parent = require("../models/Parent");

exports.all = (req, res, next) => {
	Parent.find()
		.then((parents) => {
			res.status(200).json({
				status: "success",
				payload: parents,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Aucun parent n'a été enrégistré !",
			})
		);
};

exports.single = (req, res, next) => {
	Parent.findOne({ _id: req.params.id })
		.then((parent) => {
			res.status(200).json({
				status: "success",
				payload: parent,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Parent introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const parent = new Parent({ ...req.body });
	parent
		.save()
		.then((parent) => {
			res.status(201).json({
				status: "success",
				payload: parent,
				message: "Parent bien ajouté !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter le parent !",
			})
		);
};

exports.edit = (req, res, next) => {
	Parent.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((parent) => {
			res.status(200).json({
				status: "success",
				payload: parent,
				message: "Parent modifié !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier le parent !",
			})
		);
};

exports.remove = (req, res, next) => {
	Parent.deleteOne({ _id: req.params.id })
		.then((parent) => {
			res.status(200).json({
				status: "success",
				payload: parent,
				message: "Parent supprimé !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer le parent !",
			})
		);
};
