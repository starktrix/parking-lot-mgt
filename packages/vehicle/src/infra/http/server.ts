import app from "./app";
import config from "../../config"


const PORT = config.PORT

app.listen(PORT, () => {
    console.log(`[Vehicle service server]: Listening on port ${PORT}`)
})