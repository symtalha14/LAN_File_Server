const http = require("http");
const formidable = require("formidable");
const fs = require('fs');


// Parameters Required
const SERVER_PORT = 3000;
// React App Port
const FRONTEND_SERVER_PORT = 3002;
// Directory URL of the Folder in which the files would get uploaded.
const UPLOAD_DIRECTORY = "<ENTER YOUR LOCAL DIRECTORY HERE>"
// Your LAN IP Address
const IP_ADDRESS = "<ENTER YOUR NETWORK IP ADDRESS HERE>"


http.createServer((req, res) => {
    if (req.url == "/upload") {
        var form = formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            // Maximum File Size = 4GB
            form.maxFileSize = 4 * 1020 * 1024 * 1024;
            // Save the file
            if (err) throw err;
            var server_path = files.uploadfile.path;
            var local_path = UPLOAD_DIRECTORY + files.uploadfile.name;
            console.log(local_path);
            fs.rename(server_path, local_path, (err) => {
                if (err) { res.write(err); res.end(); }
                res.writeHead(301, { "Location": `${IP_ADDRESS}/my` });
                res.end();
            });

        })
    }
    else if (req.url == "/files") {
        const path = UPLOAD_DIRECTORY;
        const fs = require('fs');
        var li = Array();
        fs.readdir(path, (err, files) => {
            files.forEach(file => {
                li.push(file);
            });
        });
        setTimeout(() => {
            console.log(li);
            res.setHeader('Access-Control-Allow-Origin', `${IP_ADDRESS}:${FRONTEND_SERVER_PORT}`);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(li));
        }, 3000);

    }
    else {
        res.write(JSON.stringify({ "status": 0 }));
        res.end();
    }
}).listen(PORT);
