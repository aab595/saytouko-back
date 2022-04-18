// IMPORTING EXTERNAL MODULES
const compression = require("compression");
const express     = require("express");
const app         = express();
const mongoose    = require("mongoose");
const cors        = require("cors")
require("dotenv").config();
// IMPORTING ROUTES
const niveauRoute = require('./routes/niveau')

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
app.use(express.json())
app.use(cors());

// ROUTES
app.use("/api/niveau", niveauRoute);

module.exports = app;
