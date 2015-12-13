/**
 * Created by alex on 9/20/15.
 */
angular.module('NodeTechApp')

    .controller('IndexController', ['$mdDialog', '$mdSidenav', '$scope', '$cookies', '$http', '$sce', function($mdDialog, $mdSidenav, $scope, $cookies, $http, $sce){
    	$scope.alive = "";
    	$http({
		  method: 'GET',
		  url: '/api/v1/read/products'
		}).then(function successCallback(response) {
			$scope.alive = response.data;
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	}])