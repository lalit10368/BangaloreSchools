var Promise = require('bluebird');
var csvParser = require('../../util/CsvParser.js');
var config = require('../../config/');

function BaseService (){
    this.fileName = config.fileName;
    this.delimiter = config.fileDelimiter;
    this.schoolDataP = csvParser(fileName, fileDelimiter);
}

BaseService.prototype.convertToJson = function() {
    return schoolDataP;
};


module.exports = BaseService;
