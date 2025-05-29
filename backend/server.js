const express = require('express');

const app = express();
const cors = require('cors');
const port = 80;

app.use(express.json()); 
app.use(cors({
  origin: 'http://localhost:5173',
}));

const server = app.post('/register', (req, res) => {
    console.log(req.body) 
    
    // res.send(`${req.body}`);
});

app.listen(port, () => {
 console.log(`server running at http://localhost${port}/`)
});