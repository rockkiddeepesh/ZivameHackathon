(function() {
    var controllers = {};

    controllers.categoryCtrl = function($scope, $stateParams, $location) {
        $scope.categories = [
            { "_id" : "cat1", "cat_name" : "Casual", "gender_id" : "gen1" },
            { "_id" : "cat2", "cat_name" : "Ethnic", "gender_id" : "gen1" },
            { "_id" : "cat3", "cat_name" : "Formal", "gender_id" : "gen1" },
            { "_id" : "cat4", "cat_name" : "Sports", "gender_id" : "gen1" },
            { "_id" : "cat5", "cat_name" : "Flats", "gender_id" : "gen2" },
            { "_id" : "cat6", "cat_name" : "Heels", "gender_id" : "gen2" }
        ];
        $scope.gender = $stateParams.gender.toLowerCase()==="men"?"MEN'S FOOTWEAR" : "WOMEN'S FOOTWEAR";

        $scope.listProducts = function(index) {
            var category = $scope.categories[index];
            $location.path("/category/" + category.cat_name + "/product/");
        }
    };
    app.controller(controllers);
})();