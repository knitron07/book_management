const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');

const server = require('http').createServer(app),
  io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

dotenv.config();

let mongo = '';
if (process.env.NODE_ENV === 'production') {
  mongo = process.env.MONGO_URL;
} else {
  mongo = process.env.MONGO_URL;
}

//Connecting Database
mongoose.connect(
  mongo,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      console.log('connected to MONGO');
    } else {
      console.log(error);
    }
  },
);

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
  }),
);
//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);

// Serve static assets if in production
// if (process.env.NODE_ENV === "production") {

//     // Set static folder
//     app.use(express.static("client/build"));

//     // index.html for all page routes
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//     });
//   }

const port = process.env.PORT || 8800;
server.listen(port, () => {
  console.log('server is running on 8800');
});
