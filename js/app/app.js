var app = angular.module("app", ["ui.router"]);

var appCtrl = function($scope) {
    $scope.data = "App ctrl";
};

app.controller("appCtrl", appCtrl);


