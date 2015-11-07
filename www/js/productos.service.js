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


.service("SeleccionInterna",function () {
    var productoSeleccionado = {};
    this.setProductoSeleccionado =function (producto) {
        productoSeleccionado = producto;
    };

    this.getProductoSeleccionado = function () {
        return productoSeleccionado;

    }
})

.service('GoogleUser', function(){
  var googleUser = null;
  this.setGoogleUser = function(usuario) {
    googleUser = usuario;
  };

  this.getGoogleUser = function() {
    return googleUser;
  };

})
;

