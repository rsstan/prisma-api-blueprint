import "dotenv/config";
import app from "./app.js"

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;    
    }
    console.log(`Server listening on port ${PORT}`);
});