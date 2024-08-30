const express=require("express")
const cors=require('cors')
const PORT=3000;
const app=express();
app.use(cors());
app.use(express.json());
const userRouter=require('./src/routes/user/user')
const mentorRouter=require('./src/routes/mentor')
const adminRouter=require('./src/routes/admin')
app.use('/user',userRouter);
app.use('/mentor',mentorRouter);
app.use('/admin',adminRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });