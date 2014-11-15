(function() {
    var directives = {};
    directives.redirect = function ($location, $window, $rootScope) {
        return {

            link: function (scope, element, attrs) {
                element.on("click", function () {
                    if (!attrs.newwindow || attrs.newwindow == false) {
                        $location.path(attrs.redirect);
                        scope.$apply();
                    }
                    else {
                        //var baseUrl = $location.$$absUrl.toString().substring(0, $location.$$absUrl.toString().indexOf($location.$$path.toString(), $location.$$absUrl.toString().indexOf("#")) + 1) + attrs.redirect;
                        var baseUrl = $location.$$absUrl.toString().substring(0, decodeURIComponent($location.$$absUrl).toString().indexOf($location.$$path.toString(), $location.$$absUrl.toString().indexOf("#")) + 1) + attrs.redirect;
                        $window.open(baseUrl);
                    }
                });
            }
        }
    }

    app.directive(directives);
})();
