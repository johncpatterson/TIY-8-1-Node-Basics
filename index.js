const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

let users = [{ name: "Bob", age: 15, id: 123, likesJS: true }];

app.get('/users', function(req, res) {
   var returnedUsers = req.body.users;
   res.json(users);
})

app.post('/users', function(req, res) {
   var newUser = req.body.newUser;
   newUser = JSON.parse(newUser);
   users.push(newUser);
   console.log(newUser);
   res.json(users);
})

app.delete('/users', function(req, res) {
   // loop through users array and find if of item to delete which is passed over from the view.
   // var array = [2, 5, 9];
   // var index = array.indexOf(5);
   // if (index > -1) {
   //    array.splice(index, 1);
   // }
   // then return updated users array as below...
   res.json(users);


});

app.listen(3000, function() {
   console.log('Example app listening on port 3000!')
})
