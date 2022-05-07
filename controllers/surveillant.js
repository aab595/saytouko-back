const Surveillant = require("../models/Surveillant");

exports.all = (req, res, next) => {
	Surveillant.find()
		.then((surveillants) => {
			if (surveillants.length > 0) {
				return res.status(200).json({
					status: "success",
					payload: surveillants,
					message: "",
				});
			}
			return res.status(200).json({
				status: "success",
				payload: [],
				message: "Aucun surveillant n'a été enrégistré !",
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
	Surveillant.findOne({ _id: req.params.id })
		.then((surveillant) => {
			res.status(200).json({
				status: "success",
				payload: surveillant,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Surveillant introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const surveillant = new Surveillant({ ...req.body });
	surveillant
		.save()
		.then((surveillant) => {
			res.status(201).json({
				status: "success",
				payload: surveillant,
				message: "Surveillant bien ajouté !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter le surveillant !",
			})
		);
};

exports.edit = (req, res, next) => {
	Surveillant.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((surveillant) => {
			res.status(200).json({
				status: "success",
				payload: surveillant,
				message: "Surveillant modifié !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier le surveillant !",
			})
		);
};

exports.remove = (req, res, next) => {
	Surveillant.deleteOne({ _id: req.params.id })
		.then((surveillant) => {
			res.status(200).json({
				status: "success",
				payload: surveillant,
				message: "Surveillant supprimé !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer le surveillant !",
			})
		);
};
