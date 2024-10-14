require("dotenv").config();
const express =  require("express")
const app = express();
const cors = require("cors")
const router = require("./router/auth-route")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const contactForm = require("./router/contact-router")
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-route")

const corsOptions={
  origin: "http://localhost:5173",
  methods: "GET, POST, PUSH, DELETE, PATCH, HEAD",
  credentials:true,
}

app.use(cors(corsOptions));

app.use(express.json());


app.use( router)
app.use( contactForm )
app.use(serviceRoute)
app.use("/admin", adminRoute)




app.use(errorMiddleware)

const PORT = 5000;


connectDb().then(() =>{
app.listen(PORT, ()=>{
  console.log(' i m done')
});
});