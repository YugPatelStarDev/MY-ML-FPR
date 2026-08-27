import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;




app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.use('/api', router);

app.listen(PORT, (err) => {
  if(err){
    console.error("Error starting server:", err);
  }else{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  }
});
