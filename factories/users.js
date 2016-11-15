(function() {
   angular
      .module('nodeshop')
      .factory('users', function($http) {

         const getUsers = function() {
            var call = $http({
               method: 'GET',
               url: 'http://localhost:3000/users'
            });
            return call;
         }

         const addUser = function(newUser) {
            var call = $http({
               method: 'POST',
               data: newUser,
               url: 'http://localhost:3000/users'
            });
            return call;
         }

         const deleteUser = function(id) {
            var call = $http({
               method: 'POST',
               data: id,
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

