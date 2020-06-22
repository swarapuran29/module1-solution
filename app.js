(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=[$scope];
function LunchCheckController($scope)
{
$scope.color="black";
$scope.message="";
$scope.name="";
$scope.checkIfTooMuch=function()
{
  var dishes=$scope.name;
  if(dishes==""){
    $scope.color="red";
    $scope.message="Please enter data first";
  }
  else{
    $scope.color="green";
    if(((dishes.split(',')).length)>3){
      $scope.message="Too much!";}
    else{
      $scope.message="Enjoy!";}
  }
};
}

})();
