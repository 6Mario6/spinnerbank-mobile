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
  $scope.acces_token = {};
	
	var usuario= '1936941186/CC';

  $scope.acces_token = googleLogin.getAccess_token();

  var promise = googleLogin.startLogin();
    promise.then(function (data) {
     $scope.usuarioGoogle = data;
      });



  ProductosService.getAll(usuario, $scope.acces_token).then(function(response){

    console.info(response.data);
    $scope.productos = response.data; 
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

.controller('google',function ($scope,$state, googleLogin, SeleccionInterna) {
            
            $scope.authorization_code ={};
            $scope.google_data = {};
            $scope.login = function () {
                var promise = googleLogin.startLogin();
                promise.then(function (data) {
                    $scope.google_data = data;
                    SeleccionInterna.setUsuarioGoogleSeleccionado($scope.google_data);
                    $state.go('app.productos');
                }, function (data) {
                    $scope.google_data = data;
                    SeleccionInterna.setUsuarioGoogleSeleccionado($scope.google_data);
                });
            };

         
})
.controller('googlemap', function ($scope,ObtenerAsesorService) {
 var usuario= '1936941186';

/*$scope.Nombre = "Cristian Ospina";
$scope.idDocumento = "546454";
$scope.Direccion = "Calle 102 No. 64 -82";
$scope.email = "ospinaospinacristian@gmail.com";
$scope.telefono = "3147965884";
*/
  ObtenerAsesorService.getAll(usuario).then(function(response){
    console.info(response.data);
    $scope.Nombre =response.data.fullName;
    $scope.Direccion =response.data.direction;
    $scope.telefono =response.data.cellphone;
    $scope.email =response.data.email;
    $scope.asesor = response.data; 
  });
 $scope.map = { center: { latitude: 5, longitude: -73 }, zoom: 12 };
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
.controller('NuevoProductoCtrl',  function($scope, $http,ObtenerProductoService,$ionicLoading,$window, googleLogin, SeleccionInterna){
   
  $scope.products = [
  ];
  $scope.productTypes = [
  ];

  $scope.acces_token = googleLogin.getAccess_token();
   $scope.usuarioGoogle = SeleccionInterna.getGoogleUser();

  console.log('Este es el acces_token: '+ $scope.acces_token + ' fin');
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
                    'jwt' : $scope.acces_token,
                    
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
        method : 'GET',
        url : 'https://spinnerbank-api-external.herokuapp.com/v2/product/request',
        //headers: headers,
        params :{
            name:$scope.formProduct.product,
            productType:$scope.formProduct.type,
            amount:$scope.formProduct.cupo,
            email : $scope.usuarioGoogle.email,

           }
        }).success(function(data) {
            console.log(data);
        });
              
    
  };

});






  

 