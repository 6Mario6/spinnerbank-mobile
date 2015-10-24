angular.module('app.services', [])
.service('ProductosService', ['$http',function($http){
	var base = 'https://spinnerbank-api-external.herokuapp.com';
    this.getAll=function (usuario) {

		
            return $http.get(base+'/productos/'+usuario);
        };
}])
 .service('MovimientosService', ['$http',function($http){
	var base = 'https://spinnerbank-api-external.herokuapp.com';
    this.getAll=function (idMovimiento) {
	
            return $http.get(base+'/transactions/'+idMovimiento);

        };
        
}])


.service('DetallesService', ['$http',function($http){
	this.get=function(usuario) {
            
            return $http.get('https://spinnerbank-api-external.herokuapp.com/productos/' + usuario);
              		
    	};

        
}])
.service("SeleccionInterna",function () {
    var productoSeleccionado = {};
    this.setProductoSeleccionado =function (producto) {
        productoSeleccionado = producto;
    };

    this.getProductoSeleccionado = function () {
        return productoSeleccionado;

    }
})
;

