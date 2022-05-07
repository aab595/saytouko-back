const Etudiant = require("../models/Etudiant");

exports.all = (req, res, next) => {
	Etudiant.find()
		.then((etudiants) => {
			if (etudiants.length > 0) {
				return res.status(200).json({
					status: "success",
					payload: etudiants,
					message: "",
				});
			}
			return res.status(200).json({
				status: "success",
				payload: etudiants,
				message: "Aucun étudiant n'a été enrégistré !",
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
	Etudiant.findOne({ _id: req.params.id })
		.then((etudiant) => {
			res.status(200).json({
				status: "success",
				payload: etudiant,
				message: "",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Etudiant introuvable !",
			})
		);
};

exports.create = (req, res, next) => {
	delete req.body._id;
	const etudiant = new Etudiant({ ...req.body });
	etudiant
		.save()
		.then((etudiant) => {
			res.status(201).json({
				status: "success",
				payload: etudiant,
				message: "Etudiant bien ajouté !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible d'ajouter l'étudiant !",
			})
		);
};

exports.edit = (req, res, next) => {
	Etudiant.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then((etudiant) => {
			res.status(200).json({
				status: "success",
				payload: etudiant,
				message: "Etudiant modifié !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de modifier l'étudiant !",
			})
		);
};

exports.remove = (req, res, next) => {
	Etudiant.deleteOne({ _id: req.params.id })
		.then((etudiant) => {
			res.status(200).json({
				status: "success",
				payload: etudiant,
				message: "Etudiant supprimé !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: "Impossible de supprimer l'étudiant !",
			})
		);
};
