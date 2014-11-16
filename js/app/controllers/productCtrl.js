(function() {
    var controllers = {};

    controllers.productCtrl = function($scope, $stateParams, $location) {
        $scope.pathBaseUrl = "file:\\D:\\images\\";

        $scope.product = { "_id" : { "$oid" : "54675381841baffdad6ffe23" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 9 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." };

        $scope.getProductInfo = function() {
            $location.path("/category/" + $stateParams.gender + "/" + $stateParams.categoryId + "/product/" + $scope.product.prod_id);
        };
        $scope.categoryName = $stateParams.categoryName;
        $scope.products = [
            { "_id" : { "$oid" : "54675381841baffdad6ffe23" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 9 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "5467577d841baffdad6ffe24" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 0 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "54675381841baffdad6ffe23" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "3", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 9 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "5467577d841baffdad6ffe24" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 0 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "54675381841baffdad6ffe23" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 9 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "5467577d841baffdad6ffe24" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 0 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "54675381841baffdad6ffe23" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 9 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "5467577d841baffdad6ffe24" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 0 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "54675381841baffdad6ffe23" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 9 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "5467577d841baffdad6ffe24" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 0 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "54675381841baffdad6ffe23" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 9 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." },
            { "_id" : { "$oid" : "5467577d841baffdad6ffe24" }, "prod_id" : "0001", "prod_name" : "Nike Capri Sneakers", "price" : "2050", "discount" : "0", "inventory" : { "size" : [ { "sizeId" : "size7", "color" : [ { "colorId" : "blue", "piecesLeft" : 8 } ] }, { "sizeId" : "size8", "color" : [ { "colorId" : "blue", "piecesLeft" : 0 } ] }, { "sizeId" : "size9", "color" : [ { "colorId" : "blue", "piecesLeft" : 2 } ] }, { "sizeId" : "size11", "color" : [ { "colorId" : "blue", "piecesLeft" : 10 } ] } ] }, "Catogory" : "cat1", "Brand" : "brand1", "Prod_Desc" : "Trendy and comfy, Nike has designed these Limnos Cat sneakers that you can slip into for most casual outings and flaunt your cool attitude. With print detailing to give them a stylish touch, these laced shoes crafted in bright hues pep up your outfit. Wear them with slim jeans and printed tees or casual shirts." }
        ];

        $scope.brands = [
            { "_id" : "brand1", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand2", "brand_name" : "puma", "brand_disc" : "0" },
            { "_id" : "brand3", "brand_name" : "reebok", "brand_disc" : "0" },
            { "_id" : "brand4", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand5", "brand_name" : "puma", "brand_disc" : "0" },
            { "_id" : "brand6", "brand_name" : "reebok", "brand_disc" : "0" },
            { "_id" : "brand7", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand8", "brand_name" : "puma", "brand_disc" : "0" },
            { "_id" : "brand9", "brand_name" : "reebok", "brand_disc" : "0" },
            { "_id" : "brand10", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand12", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand13", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand14", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand15", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand16", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand17", "brand_name" : "nike", "brand_disc" : "5" },
            { "_id" : "brand18", "brand_name" : "nike", "brand_disc" : "5" }
        ];

        $scope.filterObj = {
            selectedFilterId : null,
            filtersClicked: false
        };

        $scope.colors = [
            { "_id" : "col1", "color_name" : "black", "color_hex" : "#000000" },
            { "_id" : "col2", "color_name" : "brown", "color_hex" : "#A52A2A" },
            { "_id" : "col3", "color_name" : "blue", "color_hex" : "#0000FF" }
        ];

        $scope.chooseFilterCategory = function(event) {
            $scope.filterObj.selectedFilterId = event.target.id;
        };

        $scope.applyFilters = function() {
            //Apply filters here ...
            $scope.filterObj.filtersClicked = false;

        };
    };

    controllers.productIdCtrl = function($scope) {

    };

    app.controller(controllers);
})();