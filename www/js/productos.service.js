angular.module('app.services', [])
.service('ProductosService', ['$http',function($http){
	var base = 'https://spinnerbank-api-external.herokuapp.com/v1';
    this.getAll=function (usuario) {

            return $http.get(base+'/products/'+usuario);

        };
}])
 .service('MovimientosService', ['$http',function($http){
	var base = 'https://spinnerbank-api-external.herokuapp.com/v1';
    this.getAll=function (idMovimiento) {
	
            return $http.get(base+'/transactions/'+idMovimiento);

        };
        
}])
.service('ObtenerProductoService', ['$http',function($http){
    var base = 'https://spinnerbank-api-external.herokuapp.com/v2';
    this.getAll=function () {
    
            return $http.get(base+'/products/type');

        };
        
}])
.service("SeleccionInterna",function () {
    var productoSeleccionado = {};
    var usuarioGoogleSeleccionado = {};
    this.setProductoSeleccionado =function (producto) {
        productoSeleccionado = producto;
        //usuarioGoogleSeleccionado = usuarioGoogle;
    };

    this.setUsuarioGoogleSeleccionado = function(usuarioGoogle) {
      usuarioGoogleSeleccionado = usuarioGoogle;
    };

    this.getProductoSeleccionado = function () {
        return productoSeleccionado;

    };

    this.getGoogleUser = function() {
      return usuarioGoogleSeleccionado;
    };
})


;

