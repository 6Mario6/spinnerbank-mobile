angular.module('app.services', [])
.service('ProductosService', ['$http',function($http){
	this.getAll=function (usuario) {

    		return $http.get('https://spinnerbank-api-external.herokuapp.com/productos/' + usuario);


	};
	


 }])

 .service('MovimientosService', ['$http',function($http){
	this.getAll=function (usuario) {

            return $http.get('https://spinnerbank-api-external.herokuapp.com/transactions/' + usuario);
        };

        
}])


.service('DetallesService', ['$http',function($http){
	this.get=function(usuario) {
            
            return $http.get('https://spinnerbank-api-external.herokuapp.com/productos/' + usuario);
              		
    	};

        
}]);

