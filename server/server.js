const http = require("http");
const formidable = require("formidable");
const fs = require('fs');


http.createServer((req, res) => {
    if (req.url == "/upload") {
        var form = formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            form.maxFileSize = 4 * 1020 * 1024 * 1024;
            // Save the file
            if (err) throw err;
            var server_path = files.uploadfile.path;
            var local_path = 'C:/Users/smtal/OneDrive/Desktop/Mobile Uploads/' + files.uploadfile.name;
            console.log(local_path);
            fs.rename(server_path, local_path, (err) => {
                if (err) { res.write(err); res.end(); }
                res.writeHead(301, { "Location": "http://192.168.0.155:3002/my" });
                res.end();
            });

        })
    }
    else if (req.url == "/files") {
        const path = 'C:/Users/smtal/OneDrive/Desktop/Mobile Uploads/';
        const fs = require('fs');
        var li = Array();
        fs.readdir(path, (err, files) => {
            files.forEach(file => {
                li.push(file);
            });
        });
        setTimeout(() => {
            console.log(li);
            res.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.155:3002');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(li));
        }, 3000);

    }
    else {
        res.write(JSON.stringify({ "status": 0 }));
        res.end();
    }
}).listen(3003);
