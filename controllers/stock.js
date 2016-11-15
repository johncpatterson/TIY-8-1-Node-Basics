(function() {
   angular
      .module('nodeshop')
      .controller('UserController', function UserController(users) {
         let vm = this;

         vm.submit = function(user) {
            let newUser = {
               name: user.username,
               age: user.userage,
               likejs: user.likejs,
               id: Date.now()
            };
            vm.user = user.addUser(newUser);
            vm.form = {};
         }

         vm.onClickDelete = function(id) {            
            vm.delete = users.deleteUser(id);
            
         }

      })
})();
