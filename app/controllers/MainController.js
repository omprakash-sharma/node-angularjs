/**
 * Author : Om Prakash 
 * 17th March 2018.
 */
var app = angular.module("dentistApp");
(function(app){
    app.controller("MainController", function($scope,$routeParams,$location){
        console.log($routeParams)
        console.log("connected main controller....")
        $scope.userInfo = {};
        $scope.login = function(){
            if($scope.userInfo){
                console.log($scope.userInfo)
            }
        };
        $scope.goToLoginPage = function(path){
            $location.path(path);
        };
    });
})(app);
