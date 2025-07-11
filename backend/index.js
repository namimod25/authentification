import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/database.js";
import  SequelizeStore  from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db
});

//(async () => {
 //await db.sync();
//})();

app.post('/api/login', async(req, res) => {

})

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

app.use(express.json()); //format daata dalam JSON
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

//store.sync();

// Jalankan server
app.listen(process.env.APP_PORT, () => {
  console.log("server running...");
});

