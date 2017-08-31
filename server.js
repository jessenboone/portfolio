const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors');



const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/'));




const port = 8081;    //80



app.listen(port, () => {
console.log(`Ship docked on port ${port}`);
});
