angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {


})
.controller("usuarioCtrl", function($scope)
{
    $scope.usuario = "1936941186/CC";
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

.controller('google',function ($scope,$state, googleLogin) {
            
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

	       
})

.controller('google', function ($scope,$cordovaGeolocation) {
   


  $scope.Nombre = "Andres Felipe Montoya";
  $scope.Direccion = "Calle 102 No. 64 -82";
  $scope.telefono = "12345567";

  $scope.windowOptions = {
            visible: false
        };

  $scope.map = { center: { latitude: 5, longitude: -73 }, zoom: 5 };
            var posOptions = {timeout: 10000, enableHighAccuracy: false};

  $scope.marker = { 
    coords: {
      latitude: 5, longitude: -73
    },
    id:1,
    show: false,
    options: { draggable: false }
  }          
  
  $scope.callGeolocation = function  (argument) {
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.map.center.latitude  = position.coords.latitude;
      $scope.map.center.longitude = position.coords.longitude;
      $scope.marker.coords.latitude = position.coords.latitude;
      $scope.marker.coords.longitude = position.coords.longitude;
      $scope.map.zoom=15;
      $scope.windowOptions.visible=true;
      $scope.marker.show = true;
    }, function(err) {
      // error
    });

    
  }

  $scope.callGeolocation();
});






	

 