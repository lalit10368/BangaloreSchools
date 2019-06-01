var fs = require('fs');
var readline = require('readline');
var _ = require('lodash');
var Promise = require("bluebird");


module.exports = function(fileName, delimiter) {

    return new Promise(function(resolve) {


        var jsonData = [];
        var rl = readline.createInterface({
            input: fs.createReadStream(fileName),
            crlfDelay: Infinity
        });


        var keys;
        rl.on('line', function(line) {
            if(keys == undefined) {
                keys = line.split(delimiter).map(_.trim);
            } else {
                var values = line.split(delimiter).map(_.trim);
                if(values.length == keys.length) {
                    var object = _.zipObject(keys, values);
                    jsonData.push(object);
                }
            }

        });

        rl.on('close', function() {
            resolve(jsonData);
        });
    });
};
