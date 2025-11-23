import express from "express";
import { HOST, PORT } from "./config/env";
import middlewares from "./middlewares";
import { DEBUG, INFO } from "./utils/logger";
import handlers from "./handlers";
import routes from "./routes";

const app = express()

// set up middlewares
middlewares.forEach((e) => {
    if (e.name)
        DEBUG("✅ registered middleware:", e.name)
    app.use(e)
})

// set up routes
routes.forEach(({ router, path }) => {
    DEBUG("✅ registered route:", path)
    app.use(path, router)
})


// error handlers here
handlers.forEach(([name, handler]) => {
    DEBUG("✅ registered handler:", name)
    app.use(handler)
})


// start server
app.listen(PORT, () => INFO(`🚀 http://${HOST}:${PORT}`))