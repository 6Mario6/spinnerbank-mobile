angular.module('app.services', [])
.service('ProductosService', ['$http',function($http){
	this.getAll=function (usuario) {

            return $http.get('data/Productos.json');


        };
}]);
