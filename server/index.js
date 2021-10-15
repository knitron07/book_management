const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/user');
const bookRoute = require('./routes/book');
const server = require('http').createServer(app);

dotenv.config();

const mongo = process.env.MONGO_URL;
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
app.use('/api/users', userRoute);
app.use('/api/book', bookRoute);

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
