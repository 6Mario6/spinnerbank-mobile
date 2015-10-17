angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {


})
   
.controller('productosCtrl', ['$scope','ProductosService',function($scope,ProductosService) {
	$scope.productos = [];

	ProductosService.getAll(1936941186).then(function(response){
		console.info(response.data);
		$scope.productos = response.data;	
	});
}])
   

.controller('registrateCtrl', function($scope) {

})

.controller('movimientosCtrl', ['$scope', 'MovimientosService',function($scope, MovimientosService){
	$scope.movimientos = [];
	
	MovimientosService.getAll(1936941186).then(function(response) {
		$scope.movimientos = response.data;
	});
}]);
 