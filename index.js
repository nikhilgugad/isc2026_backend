import app from './app.js'
import connectMongo from './config/mongodb.js';

connectMongo();

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
    
})

