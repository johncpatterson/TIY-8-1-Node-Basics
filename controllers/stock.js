(function() {
   angular
      .module('nodeshop')
      .controller('UserController', function UserController(users) {
         let vm = this;

         vm.submit = function(user) {
            vm.items = users.addUser(user);
            vm.form = {};
         }

         // let returnedStorage = storage.getUsers();
         // vm.items = returnedStorage;
      })
})();
