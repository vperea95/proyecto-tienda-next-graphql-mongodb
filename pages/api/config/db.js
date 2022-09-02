const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("DB Conectada con exito");
  } catch (error) {
    console.log("Hubo un error en la conexion a la BD");
    console.log(error);
    process.exit(1); // detener la app
  }
};

module.exports = conectarDB;
