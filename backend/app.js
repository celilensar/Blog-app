import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app= express();
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect('mongodb+srv://celilensar:34Celilens81@cluster0.gre1lp4.mongodb.net/Blog')
.then(() =>app.listen(5000))
.then(()=> console.log("connected DB"))
.catch((err)=> console.log(err));

app.use("/api", (req,res,next) => {
	res.send("Hello wORLD")
})


