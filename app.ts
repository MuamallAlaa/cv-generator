import express, { Request, Response } from "express";
import path from "path";
import { GenerateCv } from "./controllers/cvcontrollers";
import bodyParser from "body-parser";
import { ValidateForm, schemas } from "./utilities/validatefrom";
import errorcontrollers from "./controllers/errorcontrollers";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/api/v1/cv", cvroutes);

app.get("/", (req: Request, res: Response) => {
  res.render("home.ejs");
});
app.post("/", ValidateForm(schemas.data), GenerateCv);

app.listen(process.env.port, () => {
  console.log(`Server is running on port${process.env.PORT}`);
});
app.use(errorcontrollers);
