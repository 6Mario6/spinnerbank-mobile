angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {


})
   
.controller('productosCtrl', ['$scope','ProductosService','SeleccionInterna',function($scope,ProductosService,SeleccionInterna) {
	$scope.productos = [];

	

	var usuario= '1936941186';
	ProductosService.getAll(usuario).then(function(response){

		console.info(response.data);
		$scope.productos = response.data;	
	});

	$scope.selectProducto=function(producto){
		SeleccionInterna.setProductoSeleccionado(producto);
	}

}])

.controller('movimientosCtrl', ['$scope','MovimientosService','$state','SeleccionInterna',function($scope,MovimientosService,$state,SeleccionInterna) {
	
	$scope.producto = SeleccionInterna.getProductoSeleccionado();

	$scope.whichproducto=$state.params.aId;
	$scope.movimientos = [];
	MovimientosService.getAll($scope.whichproducto).then(function(response){
		console.info(response.data);
		$scope.movimientos = response.data		
	});
}])
  
.controller('registrateCtrl', function($scope) {

});


	

 