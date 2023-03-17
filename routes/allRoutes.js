const express= require('express');
const bookRoute= require("./bookRoute");

// import signupRoute from "./signupRoute.js"
// import loginRoute from "./loginRoute.js"
// import messageRoute from "./messageRoute.js"
// import newsLetterRoute from "./newsLetterRoute.js"
// import swaggerui from "swagger-ui-express"
// import apiDoc from "../docs/basicInfos.js"

const router = express.Router()

// all routes

router.use("/books",bookRoute)
// router.use("/signup",signupRoute)
// router.use("/login",loginRoute)
// router.use("/message",messageRoute)
// router.use("/newsLetter",newsLetterRoute)

// router.use("/apiDoc", swaggerui.serve, swaggerui.setup(apiDoc),)
module.exports = router;
