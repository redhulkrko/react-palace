export const {
    PORT = 5000,
    NODE_ENV = 'development',
    MONGO_URI = 'mongodb://heroku_njw97gng:Logan417897@ds157204.mlab.com:57204/heroku_njw97gng',
    SESS_NAME = 'sid',
    SESS_SECRET = 'secret!session',
    SESS_LIFETIME = 1000 * 60 * 60 * 2
  } = process.env;
