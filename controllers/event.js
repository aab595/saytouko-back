const Event = require("../models/Event");

exports.all = (req, res, next) => {
	Event.find()
		.populate("matiere")
		.populate("salle")
		.then((events) => {
			if (events.length > 0) {
				return res.status(200).json({
					status: "success",
					payload: events,
					message: "",
				});
			}
			return res.status(200).json({
				status: "success",
				payload: events,
				message: "Aucune matière n'a été enrégistrée !",
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
	Event.findOne({ _id: req.params.id })
		.then((event) => {
			res.status(200).json({
				status: "success",
				payload: event,
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
	const event = new Event({ ...req.body });
	event
		.save()
		.then((event) => {
			res.status(201).json({
				status: "success",
				payload: event,
				message: "Matière bien ajoutée !",
			});
		})
		.catch((error) =>
			res.status(400).json({
				status: "fail",
				payload: [],
				message: error,
			})
		);
};

exports.edit = (req, res, next) => {
	Event.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then((event) => {
			res.status(200).json({
				status: "success",
				payload: event,
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
	Event.deleteOne({ _id: req.params.id })
		.then((event) => {
			res.status(200).json({
				status: "success",
				payload: event,
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
