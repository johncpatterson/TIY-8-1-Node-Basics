(function() {
   angular
      .module('nodeshop')
      .factory('users', function($http) {

         const getUsers = function() {
            let call = $http({
               method: 'GET',
               url: 'http://localhost:3000/users'
            });
            return call;
         }

         const addUser = function(newUser) {
            let call = $http({
               method: 'POST',
               data: {newUser:newUser},
               url: 'http://localhost:3000/users'
            });
            return call;
         }

         const deleteUser = function(id) {
            let call = $http({
               method: 'POST',
               data: newUser.id,
               url: 'http://localhost:3000/users'
            });
            return call;
         }

         return {
            getUsers,
            addUser,
            deleteUser
         }

      });
})();

