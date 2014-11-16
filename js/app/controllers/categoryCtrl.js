(function() {
    var controllers = {};

    controllers.categoryCtrl = function($scope, $stateParams, $location, $http) {
        var request = {"gender":"gen1"};

        /*$http({ method: "POST", url: "http://127.0.0.1:1337", data: JSON.stringify(request) }).
            success(function (data, status) {
                alert("success");
            }).
            error(function (data, status) {
                alert("error");
            });*/
        //$.post( "http://127.0.0.1:1337", {"gender":"gen1"})
        //    .done(function( data ) {
        //        alert( "Data Loaded: " + data );
        //    });
  /*      $.ajax({
            url: "http://127.0.0.1:1337",
            type: "POST",
            dataType: "xml/html/script/json", // expected format for response
            contentType: "application/json", // send as JSON
            data: JSON.stringify(request),

            complete: function(data) {
                //called when complete
                alert("complete" + JSON.stringify(data));
            },

            success: function(data) {
                //called when successful
                alert("success");
            },

            error: function() {
                //called when there is an error
                alert("error");
            }
        });
*/
        $http.post('http://127.0.0.1:1337', {"gender":"gen1"}).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                alert(JSON.stringify(data));
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("error in service callback");
            });

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
            $location.path("/category/" + $stateParams.gender + "/" + category._id + "/product/");
        };
    };
    app.controller(controllers);
})();