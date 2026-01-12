const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/helloworld', express.static(path.join(__dirname, 'public')));

// Redirect root to /helloworld
app.get('/', (req, res) => {
    res.redirect('/helloworld');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/helloworld`);
});
