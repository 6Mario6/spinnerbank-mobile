angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {


})
   
.controller('productosCtrl', ['$scope','ProductosService','SeleccionInterna','googleLogin','RecibirToken',function($scope,ProductosService,SeleccionInterna,googleLogin, RecibirToken ) {
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
      });

    

	$scope.selectProducto=function(producto,usuarioGoogle){
		SeleccionInterna.setProductoSeleccionado(producto);
        SeleccionInterna.setUsuarioGoogleSeleccionado(usuarioGoogle);

	};


	
  
}])

.controller('movimientosCtrl', ['$scope','MovimientosService','$state','googleLogin','SeleccionInterna',function($scope,MovimientosService,$state,googleLogin,SeleccionInterna) {
	
	$scope.producto = SeleccionInterna.getProductoSeleccionado();
    $scope.usuarioGoogle = SeleccionInterna.getGoogleUser();

	$scope.whichproducto=$state.params.aId;
	$scope.movimientos = [];
	MovimientosService.getAll($scope.whichproducto).then(function(response){
		console.info(response.data);
		$scope.movimientos = response.data;	
	});

  

	
}])
  
.controller('registrateCtrl', function($scope) {

})

.controller('menuCtrl', ['$scope','$window','$ionicLoading','googleLogin', function($scope, $window,$ionicLoading,googleLogin){

    $scope.logout = function () {
                var promise = googleLogin.logout();
                $scope.show('Sesión cerrada con éxito!');
                $window.location.href = '#/login';
                $window.setTimeout(function() {
                $ionicLoading.hide();
            }, 1999);
              
    };

	
}])

.controller('google',function ($scope,$state, googleLogin,RecibirToken) {
            
            $scope.authorization_code ={};
            $scope.google_data = {};
            $scope.login = function () {
                var promise = googleLogin.startLogin();
                promise.then(function (data) {
                    $scope.google_data = data;
                   
                    $state.go('app.productos');
                }, function (data) {
                    $scope.google_data = data;
                });
            };
	
});




	

 