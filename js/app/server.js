var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var MongoClient = require('mongodb').MongoClient;

    if(req.method=='POST')
    {
        var body='';
        req.on('data', function (data) {
            body +=data;
        });
        req.on('end',function()
        {
            //var POST =  qs.parse(body);
            var POST =  JSON.parse(body);
            //console.log(JSON.parse(body));

            var gender = POST.gender;
            var categoryId = POST.categoryId;
            var productId = POST.productId;

            if(typeof categoryId === "undefined" && typeof productId === "undefined")
            {
                var query={"gender_id":gender};
                MongoClient.connect('mongodb://127.0.0.1:27001/zivhack',function(err, db){
                console.log(query);
                    if(err) throw err;



                    db.collection("category").find(query).toArray(function(err, doc){
                        //Print the result
                        // console.dir(doc);


                        var output = JSON.stringify(doc);
                        console.log(db1);
                        console.log(output);
                        res.write(output);
                        //res.write(output.toString());
                        // Close the db
                        db.close();
                        res.end("Hello");
                    });

                    //Declare Sucess

                    // console.dir("Called FindOne");
                });


            }
            else if(categoryId)
            {
               console.log(categoryId);
                var query={"Catogory":categoryId};
                console.log(query);

                MongoClient.connect('mongodb://127.0.0.1:27001/zivhack',function(err, db){

                    if(err) throw err;



                    db.collection("product").find(query).toArray(function(err, doc){
                        //Print the result
                        // console.dir(doc);


                        var output = JSON.stringify(doc);

                        console.log(output);
                        res.write(output);
                        //res.write(output.toString());
                        // Close the db
                        db.close();
                        //res.end(out);
                    });

                    //Declare Sucess

                    // console.dir("Called FindOne");
                });
            }
            else
            {
                var query={"prod_id":productId};
                var db1="product";
                MongoClient.connect('mongodb://127.0.0.1:27001/zivhack',function(err, db){

                    if(err) throw err;



                    db.collection("product").find(query).toArray(function(err, doc){
                        //Print the result
                        // console.dir(doc);


                        var output = JSON.stringify(doc);
                        //console.log(db1);
                        console.log(output);
                        res.write(output);
                        //res.write(output.toString());
                        // Close the db
                        db.close();
                        //res.end(out);
                    });

                    //Declare Sucess

                    // console.dir("Called FindOne");
                });
            }


        });
    }



}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
