
angular.module('App', [])
.controller('PageController', ['$scope', function($scope) {
  $scope.listarTransportadoras = true;


  $scope.goForm = function(){
    $scope.listarTransportadoras = false;
    alert("alerta");
  }

}]);

function goForm(){
  alert("alerta");

}

onpage = new function() {
  alert("okay");
}



