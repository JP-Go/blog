import express from 'express';
import articles from './routes/articles'
const app = express();

app.get('/', (_, res) => {
	res.send({ some: "json" });
})

app.use('/articles', articles)


app.listen(5000, () => { console.log("Listening on port 5000") });
