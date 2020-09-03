import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Hello goStack'});
});

app.listen(3333, () => {
	console.log('🚀 Server Started on port 3333');
});