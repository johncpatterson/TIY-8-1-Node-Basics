const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

let users = [];
// let users = [{ name: "Bob", age: 15, id: 123, likesJS: true }];

app.get('/users', function(req, res) {
   res.json(users);
})

app.post('/users', function(req, res) {
   var newUser = req.body.newUser;
   console.log(newUser);
   users.push(newUser);
   // console.log(newUser);
   res.json(users);
})

app.delete('/users', function(req, res) {
   let id = req.body.id;
   id = parseInt(id);
   let spotinArray = null;
   users.forEach(function(item, index) {
      if (item.id === id) {
         spotinArray = index;
      }
   })
   users.splice(spotinArray, 1);
   res.json(users);
   res.json({ error: "Couldn't find matching ID" });
});

app.listen(3000, function() {
   console.log('Example app listening on port 3000!')
})
