import dotenv  from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './src/routes/user.route.js'
import authRoutes from './src/routes/auth.route.js'



dotenv.config()
const app = express();

mongoose
  .connect(
    process.env.MONGO_CON
  )
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


  app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error!";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
