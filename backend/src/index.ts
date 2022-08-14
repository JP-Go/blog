import express from 'express';
import articles from './routes/articles';
const app = express();
const port = 5000;

app.get('/', (_, res) => {
    res.send('<h1>Hello</h1>');
});

app.use('/articles', articles);

app.listen(port, () => {
    console.log(
        `Faça requisições em http://localhost:${port} para acessar o servidor`
    );
});
