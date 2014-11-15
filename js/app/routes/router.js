(function () {
    //    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    //        xmlhttp = new XMLHttpRequest();
    //    }
    //    else {// code for IE6, IE5
    //        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //    }
    //    xmlhttp.open("GET", "config.xml", false);
    //    xmlhttp.send();
    //    xmlDoc = xmlhttp.responseXML;
    //  staticContent = xmlDoc.getElementsByTagName("staticContent")[0].childNodes[0].nodeValue; //staticContent i.e. HTML files


    var routeResolver = function ($stateProvider, $urlRouterProvider, STATIC_CONTENT) {
        $stateProvider
            .state('home', {
                url: "/Home",
                views: {
                    "main-view": {
                        templateUrl: "../../views/index.html",
                        controller: "appCtrl",
                        /*resolve: {
                            appInitialize: appCtrl.initializeAppData
                        }*/
                    }
                }
            });
        /*.state('techninjaSearch1', {
         url: "/VisitorProfile.htm",
         views: {
         "main-view": {
         templateUrl: STATIC_CONTENT + "/views/techninjaOpenQuestions.htm",
         controller: "techninjaOpenQuestionsCtrl",
         resolve: {
         appInitialize: konnectAppCtrl.initializeAppData
         }
         }
         }
         });*/

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
    konnectApp.config(routeResolver);
} ());
