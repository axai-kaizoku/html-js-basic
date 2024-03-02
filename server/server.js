const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const data = [
	{
		id: 1,
		name: 'Bleach',
		genre: 'shonen',
		mc: 'Ichigo kurasaki',
		status: 'on going',
	},
	{
		id: 2,
		name: 'Onepiece',
		genre: 'shonen',
		mc: 'Monkey D Luffy',
		status: 'on going',
	},
	{
		id: 3,
		name: 'Naruto',
		genre: 'shonen',
		mc: 'Naruto Uzumaki',
		status: 'completed',
	},
	{
		id: 4,
		name: 'Overflow',
		genre: 'echhi',
		mc: 'unknown',
		status: 'completed',
	},
	{
		id: 5,
		name: 'Vinland Saga',
		genre: 'history',
		mc: 'Toriffin',
		status: 'on going',
	},
];

app.get('/', (req, res) => {
	return res.json({ message: 'Server is up' });
});

app.get('/data', (req, res) => {
	return res.json(data);
});

app.listen(8080, () => {
	console.log('SErver is running bruh!!!');
});
