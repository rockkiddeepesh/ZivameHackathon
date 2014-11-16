(function () {
    var routeResolver = function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/Home",
                views: {
                    "main-view": {
                        templateUrl: "views/home.html",
                        controller: "homeCtrl"
                    }
                }
            })
            .state('category', {
                url: "/category/:gender",
                views: {
                    "main-view": {
                        templateUrl: "views/category.html",
                        controller: "categoryCtrl"
                    }
                }
            })
            .state('product', {
                url: "/category/:gender/:categoryId/product/",
                views: {
                    "main-view": {
                        templateUrl: "views/product.html",
                        controller: "productCtrl"
                    }
                }
            })
            .state('productId', {
                url: "/category/:gender/:categoryId/product/:productId",
                views: {
                    "main-view": {
                        templateUrl: "views/productId.html",
                        controller: "productIdCtrl"
                    }
                }
            });

        $urlRouterProvider.otherwise("/Home");

        /*$urlRouterProvider.rule(function ($injector, $location) {
         //what this function returns will be set as the $location.url
         var path = $location.path(), normalized = path.toLowerCase();
         if (path != normalized) {
         //instead of returning a new url string, I'll just change the $location.path directly so I don't have to worry about constructing a new url string and so a new state change is not triggered
         $location.path(normalized).replace();
         }
         // because we've returned nothing, no state change occurs
         //return $location.absUrl(normalized);
         });*/
    };

    //Adding the Route Configuration in the Konnect App.
    app.config(routeResolver);
} ());
