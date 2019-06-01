var Promise = require('bluebird');
var csvParser = require('../../util/CsvParser.js');
var config = require('../../config/');

function BaseService (){
    var fileName = config.fileName;
    var filePath = config.filePath;
    this.schoolDataP = csvParser([filePath, fileName].join("/"), config.fileDelimiter);
}

BaseService.prototype.convertToJson = function() {
    return schoolDataP;
};


module.exports = BaseService;
