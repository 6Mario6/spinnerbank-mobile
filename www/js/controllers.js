angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {


})
   
.controller('productosCtrl', ['$scope','ProductosService',function($scope,ProductosService) {
	$scope.productos = [];

	var usuario= '1936941186';
	ProductosService.getAll(usuario).then(function(response){

		console.info(response.data);
		$scope.productos = response.data;	
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
/*
.controller('movimientosCtrl', ['$scope', 'MovimientosService',function($scope, MovimientosService){
	$scope.movimientos = [];
	
	MovimientosService.getAll(1936941186).then(function(response) {
		$scope.movimientos = response.data;
	});
}])*/

//.controller('detalleProductoCtrl',['$scope','DetallesService', function($scope,$stateParams,DetallesService){
.controller('detalleProductoCtrl', function($scope, $stateParams, DetallesService) {
	$scope.productos = [];
	$scope.producto = 0;

	DetallesService.get(1936941186).then(function(response) {
		$scope.productos = response.data;
		for (var i = 0; i < $scope.productos.length; i++) {
        		if ($scope.productos[i].idProducto == parseInt($stateParams.productoId)) {
          			
          			$scope.producto = $scope.productos[i];
        		}
      		}
	});

});

	

 