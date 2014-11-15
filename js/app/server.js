var http = require('http');
http.createServer(function (req, res) {
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://127.0.0.1:27001/zivhack',function(err, db){

        if(err) throw err;

        var query={"gender_id":"gen1"}

        db.collection('category').find(query).toArray(function(err, doc){
            //Print the result
            console.dir(doc);

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(doc));
            // Close the db
            db.close();
        });

        //Declare Success

        console.dir("Called FindOne");
    });


}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
