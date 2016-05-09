angular.module('home.userget', [])
    .controller('users', function($scope, $http, $state) {

        console.log($scope.showSelectValue);
        var url = "http://localhost:8080/inventry/login?status="+$scope.showSelectValue;
        $http.get(url) .then(function (response) {
            $scope.inventry = response.data;
            $state.go('home.userget');
        });

});
