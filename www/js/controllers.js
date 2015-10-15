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
.controller('detalleProductoCtrl', ['$scope','$state',function($scope,$state){

$scope.whichproducto=$state.params.aId;
 
}])   
.controller('registrateCtrl', function($scope) {

})
 