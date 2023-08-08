import express from "express"

const app = express();

app.get('/firstwordsaidonline', (_, res) => res.send('lo'))
// TODO: Create + Ignore .config

app.listen(5001, () => console.log('Planning App is running on port 5001!'))
