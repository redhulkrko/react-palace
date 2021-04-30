export const {
  PORT = 5000,
  NODE_ENV = "development",
  MONGO_URI = "mongodb+srv://redhulkrko:QGeyKF03azgvU8K9@cluster0.3ruts.mongodb.net/react_palace?retryWrites=true&w=majority",
  SESS_NAME = "sid",
  SESS_SECRET = "secret!session",
  SESS_LIFETIME = 1000 * 60 * 60 * 2,
} = process.env;
