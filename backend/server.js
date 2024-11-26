// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const postRoutes = require('./routes/postRoutes');

// const app = express();

// // const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/";
// // const mongoURI = process.env.MONGO_URI

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/posts', postRoutes);

// // Connect to MongoDB
// // mongoose.connect(mongoURI)
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const postRoutes = require('./routes/postRoutes');

// mongoose.set('debug', true);

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/posts', postRoutes);

// // Connect to MongoDB
// // mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect(process.env.MONGODB_URI)

//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });
//   console.log('MONGODB_URI:', process.env.MONGODB_URI);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    console.error('Detailed Error:', err);
  });
console.log('MONGO_URI:', process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
