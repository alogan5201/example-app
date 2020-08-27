module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "drdeath",
  DB: "mydb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
