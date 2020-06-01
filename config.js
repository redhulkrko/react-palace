export const {
    PORT = 5000,
    NODE_ENV = 'development',
    // MONGO_URI = 'mongodb://redhulkrko:silver990@ds157204.mlab.com:57204/heroku_njw97gng',
    MONGO_URI = 'mongodb://127.0.0.1:27017/data',
    SESS_NAME = 'sid',
    SESS_SECRET = 'secret!session',
    SESS_LIFETIME = 1000 * 60 * 60 * 2
  } = process.env;
