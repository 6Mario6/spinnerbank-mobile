angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('productosCtrl', ['$scope','ProductosService',function($scope,ProductosService) {
	$scope.productos = [];

	ProductosService.getAll().then(function(response){
		console.info(response.data);
		$scope.productos = response.data		
	});
}])
   
.controller('registrateCtrl', function($scope) {

})
 