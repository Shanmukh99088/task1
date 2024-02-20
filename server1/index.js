const dotenv = require("dotenv")
const documents= require('./routes/documents.js')
const authenticate= require('./routes/authenticate.js')

const express = require("express"); 
dotenv.config();

const PORT = 8000;
const app = express();
app.use("/documents", documents);

app.get('/',(req,res)=>{
  console.log("server is connected");
})

app.listen(PORT, () =>
  console.log(`Backend started on port ${PORT}`)
);
