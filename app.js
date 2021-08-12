const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const staticFolder = path.resolve(__dirname, 'public');
app.use(express.static(staticFolder));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.listen(PORT, () => {
    console.log('server running')
})
