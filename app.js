// IMPORTING EXTERNAL MODULES
const compression = require("compression");
const express     = require("express");
const app         = express();
const mongoose    = require("mongoose");
const cors        = require("cors");
require("dotenv").config();
// IMPORTING ROUTES
const niveauRoute     = require("./routes/niveau");
const classeRoute     = require("./routes/classe");
const etudiantRoute   = require("./routes/etudiant");
const matiereRoute    = require("./routes/matiere");
const salleRoute      = require("./routes/salle");
const appelRoute      = require("./routes/appel");
const eventRoute      = require("./routes/event");
const enseignantRoute = require("./routes/enseignant");
const parentRoute     = require("./routes/parent");

// DB CONNECTION
// mongoose
// 	.connect(process.env.MONGODB_URI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log("Connexion à MongoDB réussie !"))
// 	.catch(() => console.log("Connexion à MongoDB échouée !"));

// MIDDLEWARES
app.use(compression());
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/niveau", niveauRoute);
app.use("/api/classe", classeRoute);
app.use("/api/etudiant", etudiantRoute);
app.use("/api/matiere", matiereRoute);
app.use("/api/salle", salleRoute);
app.use("/api/appel", appelRoute);
app.use("/api/event", eventRoute);
app.use("/api/enseignant", enseignantRoute);
app.use("/api/parent", parentRoute);

module.exports = app;
