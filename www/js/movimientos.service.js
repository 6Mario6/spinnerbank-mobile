angular.module('app.services', [])
.service('MovimientosService', ['$http',function($http){
	this.getAll=function (usuario) {

            return $http.get('data/Movimientos.json');


        };
}]);
