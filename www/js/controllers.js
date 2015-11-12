angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {


})
   
.controller('productosCtrl', ['$scope','ProductosService','SeleccionInterna','googleLogin',function($scope,ProductosService,SeleccionInterna,googleLogin ) {
	$scope.productos = [];
	$scope.usuarioGoogle = {};
	

	var usuario= '1936941186/CC';
	ProductosService.getAll(usuario).then(function(response){

		console.info(response.data);
		$scope.productos = response.data;	
	});

	var promise = googleLogin.startLogin();
    promise.then(function (data) {
     $scope.usuarioGoogle = data;
      console.log(data.picture);
      });


	$scope.selectProducto=function(producto){
		SeleccionInterna.setProductoSeleccionado(producto);
	};
	
  
}])

.controller('movimientosCtrl', ['$scope','MovimientosService','$state','SeleccionInterna',function($scope,MovimientosService,$state,SeleccionInterna) {
	
	$scope.producto = SeleccionInterna.getProductoSeleccionado();

	$scope.whichproducto=$state.params.aId;
	$scope.movimientos = [];
	MovimientosService.getAll($scope.whichproducto).then(function(response){
		console.info(response.data);
		$scope.movimientos = response.data	;	
	});

	
}])
  
.controller('registrateCtrl', function($scope) {

})

.controller('menuCtrl', ['$scope','googleLogin', function($scope, googleLogin){

	$scope.usuarioGoogle = {};
	var promise = googleLogin.startLogin();
    promise.then(function (data) {
     $scope.usuarioGoogle = data;
      console.log(data.picture);
      });

	
}])

.controller('google',function ($scope, googleLogin) {
            $scope.google_data = {};
            $scope.login = function () {
                var promise = googleLogin.startLogin();
                promise.then(function (data) {
                    $scope.google_data = data;
                    console.log(data.picture);
                });

               
            }

            /*$scope.getGoogleData = function() {

            	var promise = googleLogin.getUserInfo();
            	promise.then(function (data){

            		return data;
            	})
            }*/

        
	
});




	

 