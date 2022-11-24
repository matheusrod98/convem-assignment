const express = require('express');
const app = express();

const PORT = 5002;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`Its alive on http://localhost:${PORT}`)
)

app.post('/v1/hired', (req, res) => {
    const input = req.body;

    if (!input) {
        res.status(400).send({ Error: 'Invalid request: no message body' })
    }

    else if (input.userInput.toUpperCase() == "SIM") {
        res.status(209).send({ hired: "success" });
    }

    else {
        res.status(210).send({ hired: "Error" });
    }
})

app.use((err, req, res, next) => res.status(500).send({ Error: err.message }))
