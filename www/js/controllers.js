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
.controller('googlemap2', function ($scope) {
$scope.Nombre = "Andres Felipe Montoya";
$scope.Direccion = "Calle 102 No. 64 -82";
$scope.telefono = "12345567";
 $scope.map = { center: { latitude: 5, longitude: -73 }, zoom: 5 };
            var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $scope.options = {scrollwheel: false};
        $scope.marker = {
            coords: {
                latitude: 5,
                longitude: -73
            },
            show: false,
            id: 0
        };

        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };

        $scope.title = "Window Title!";


})
.controller('googlemap', function ($scope) {
   
/*,$cordovaGeolocation*/

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
  };     
  
  $scope.centrarMapa=function  (latitude, longitude) {
    $scope.map.center.latitude  = latitude;
      $scope.map.center.longitude = longitude;
      $scope.marker.coords.latitude = latitude;
      $scope.marker.coords.longitude = longitude;
      $scope.map.zoom=15;
      $scope.windowOptions.visible=true;
      $scope.marker.show = true;
  }

 /* $scope.callGeolocation = function  (argument) {
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.centrarMapa(position.coords.latitude,position.coords.longitude);
    }, function(err) {
      // error
    });

    
  };

  $scope.callGeolocation();*/
})

.controller('NuevoProductoCtrl',  function($scope, $http,ObtenerProductoService,$ionicLoading,$window){
   
  $scope.products = [
  ];
  $scope.productTypes = [
  ];
ObtenerProductoService.getAll().then(function(response){
    console.info(response.data);
    $scope.products = response.data; 
  });
 $scope.formProduct = {};
$scope.showSelectValue = function(productoName){
   for (i = 0; i < $scope.products.length; i++) { 
            if(productoName==$scope.products[i].productName){
              $scope.productTypes=$scope.products[i].productTypes;
              break;
            }
      }
  };
  $scope.save = function(){
  var headers = {
                    'Access-Control-Allow-Origin' : '*',
                    'Accept': 'application/json'
                  };
    if (!$scope.formProduct.product||!$scope.formProduct.type || !$scope.formProduct.cupo) {
      $scope.show("Por favor ingresar los campos");
                $window.setTimeout(function() {
                $ionicLoading.hide();
                }, 1999);
      return false;
    }
  console.log("posting data....");
  console.log($scope.formProduct.product);
  console.log($scope.formProduct.type);
  console.log($scope.formProduct.cupo);
        $http({
        method : 'POST',
        url : 'http://api-que-no-esta-aun',
        headers: headers,
        data :JSON.stringify({
            producto:$scope.formProduct.product,
            tipo_producto:$scope.formProduct.type,
            cupo:$scope.formProduct.cupo,

           })
        }).success(function(data) {
            console.log(data);
        });
              
    
  };

});






	

 