(function() {
   angular
      .module('nodeshop')
      .controller('UserController', function UserController(users) {
         let vm = this;

         let promise = users.getUsers();
         promise.then(res => {
            console.log(res.data);
            vm.users = res.data;
         })

         vm.submit = function(user) {
            let newUser = {
               name: user.username,
               age: user.userage,
               likejs: user.likejs,
               id: Date.now()
            };
            vm.user = users.addUser(newUser);
            vm.form = {};

         }

         vm.onClickDelete = function(id) {
            vm.delete = users.deleteUser(id);

         }

      })
})();
