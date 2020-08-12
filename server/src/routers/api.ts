/** components */
import helloworld from "../components/hello/route";

// router
import * as express from "express";
const router = express.Router();

router.use("/hello", helloworld);

export default router;
