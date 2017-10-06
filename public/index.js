
let _ 			= require('lodash');
let express 	= require('express');
let cors 		= require('cors');
let bodyParser 	= require('body-parser');
let history 	= require('express-history-api-fallback');

var app = express();
app.set('port', (process.env.PORT || 5001));

var root = __dirname;

app.use(express.static(root));
app.use(history('index.html', { root: root }));
app.use(bodyParser.json());
app.use(cors());

let server = app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
