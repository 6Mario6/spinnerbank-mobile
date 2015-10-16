angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('productosCtrl', ['$scope','ProductosService',function($scope,ProductosService) {
	$scope.productos = [];
	var usuario= '1936941186';
	ProductosService.getAll(usuario).then(function(response){
		console.info(response.data);
		$scope.productos = response.data		
	});
}])
.controller('movimientosCtrl', ['$scope','MovimientosService','$state',function($scope,MovimientosService,$state) {
	$scope.whichproducto=$state.params.aId;
	$scope.movimientos = [];
	MovimientosService.getAll($scope.whichproducto).then(function(response){
		console.info(response.data);
		$scope.movimientos = response.data		
	});
}])
  
.controller('registrateCtrl', function($scope) {

})
 