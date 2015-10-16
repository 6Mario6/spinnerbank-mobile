angular.module('app.services', [])
.service('ProductosService', ['$http',function($http){
	this.getAll=function (usuario) {
	var base = 'https://spinnerbank-api-external.herokuapp.com';
            return $http.get(base+'/productos/'+usuario);
        };
}])
 .service('MovimientosService', ['$http',function($http){
	this.getAll=function (idMovimiento) {
	var base = 'https://spinnerbank-api-external.herokuapp.com';
            return $http.get(base+'/transactions/'+idMovimiento);
        };
        
}]);
