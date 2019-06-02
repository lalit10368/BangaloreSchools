var express    = require("express");
var bodyParser = require('body-parser');
var cors       = require('cors');
var fs         = require('fs');
var _path = require('path');  

var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/static', express.static(_path.join(__dirname, '../public')));


function init(path, app) {
    var rest = path + '/rest';
    var files = fs.readdirSync(rest);

    files.forEach(function(file){
        if(['.','..'].indexOf(file) > -1) {
            return;
        }
        var filePath = [rest,file].join('/');
        var pathStat = fs.statSync(filePath);
        if(pathStat.isFile() && file.substr(-3) === '.js') {
            require(filePath).init(app);
        }
    });
}

init(__dirname, app);

module.exports.start = function() {
    app.listen(3000, function(err) {
        if (err) {
            console.log('Error in starting api server:', err);
        }
        console.log("api server listening on", 3000);
    });
};
