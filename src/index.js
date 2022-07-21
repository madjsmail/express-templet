const bodyParser = require('body-parser');
const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const apicache = require("apicache");
const http = require("http");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");





app.use(
    helmet({
        referrerPolicy: { policy: "no-referrer" },
    })
);


app.use(bodyParser.json());



// *** cache all routes *** 
// app.use(cache("2 minutes"));


app.use('/api/v1/workouts', v1WorkoutRouter);

// For testing purposes 
app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);

    V1SwaggerDocs(app, PORT);
});