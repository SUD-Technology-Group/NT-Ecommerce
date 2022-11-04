const mongoose = require("mongoose");

async function connect() {
  const url =
    "mongodb://127.0.0.1:27017/nt-ecommerce" || process.env.DATABASE_URL;
  await mongoose.connect(url, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.once("open", (_) => {
    console.log("Connect to database successfully");
  });

  db.on("error", (err) => {
    console.error("Failed to connect to database");
  });
}

module.exports = { connect };
