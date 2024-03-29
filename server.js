// ESM syntax is supported.
var express = require('express');
import mongoose from 'mongoose';
import session from "express-session";
import connectStore from "connect-mongo";
import { userRoutes, sessionRoutes, movieRoutes} from './routes/index';
import { PORT, NODE_ENV, MONGO_URI, SESS_NAME, SESS_SECRET, SESS_LIFETIME } from './config';

var cors = require('cors');

(async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log('MongoDB connected');
const app = express();
app.use(cors({ origin: true, credentials: true }));
const MongoStore = connectStore(session);

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  name: SESS_NAME,
  secret: SESS_SECRET,
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: 'session',
    ttl: parseInt(SESS_LIFETIME) / 1000
  }),
  cookie: {
    sameSite: true,
    secure: NODE_ENV === 'production',
    maxAge: parseInt(SESS_LIFETIME)
  }
}));
var path = require('path');

const apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.use('/users', userRoutes);
apiRouter.use('/session', sessionRoutes);
apiRouter.use('/movies', movieRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
// }

// else {
//   app.use(express.static(path.join(__dirname, '/client/public')));
//   app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
//   });
// }

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
} catch (err) {
  console.log(err)
}
})();