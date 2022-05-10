// express server setup
const express = require('express');
const app = express();
const port = process.env.PORT ||8080;
const bodyParser = require('body-parser');
const cors = require('cors');
//conect with my sql database
const mysql = require('mysql');
const connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'cgbros'

});

//connect to the database
connection.connect();
//use cors
app.use(cors());
//use body parser
app.use(bodyParser.json());
//check if concection is working
app.get('/', (req, res) => {
	res.send('conection is working');
});

app.post('/login', (req, res) => {
	const { name, password } = req.body;
	console.log()
	connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], (err, results) => {
		if (err) {
			res.send(err);
		} else {
			console.log(results);
			if(results.length > 0){
				
				
				var status= {status: "success",id: results[0].id};
				console.log(status);
				res.send(status);
				
			}
		}
	});
}
);









//start the server
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
//end of server.js