
import express from 'express';
import bodyParser from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import accountRoutes from './routes/accounts.js';

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 80;
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/users', userRoutes);
app.use('/accounts', accountRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
// process.env.MONGODB_URI là chuỗi kết nối của mongodb
// trên môi trường bất kỳ

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);