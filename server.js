const express = require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();

var corsOptions = 
{
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

app.get("/", (req, res) => 
{
  res.json({ message: "Bienvenido a la aplicación Pedro Pérez Sánchez." });
});

require("./app/routers/departamentos.router")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => 
{
  console.log(`Server is running on port ${PORT}.`);
});

//para comprobar si funciona 
//sql Shell(psql)
//primero conectamos la base de datos con el comando \c <<nombrebasesdedatos>> nombrebasededatos=departamentos
//para ver la descripcion de la tabla utilizamos el comando \d departamentos