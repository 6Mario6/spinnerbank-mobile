angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  
  })
      
        
    .state('app.productos', {
      url: '/lista_productos',
      views: {
      'menuContent': {
        templateUrl: 'templates/productos.html',
      controller: 'productosCtrl'
      }
    }
      
    })
    .state('app.detalle',{
    url: '/producto/:aId',
    views: {
      'menuContent':{
        templateUrl:'templates/detalle.html',
        controller:'detalleProductoCtrl'
      }
    }
  })    
       
        
    .state('registrate', {
      url: '/registro',
      templateUrl: 'templates/registrate.html',
      controller: 'registrateCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});