var BaseService = require('./BaseService.js');

function SearchService() {
    BaseService.call(this);
}

SearchService.prototype.searchBySchoolName = function(schoolName){

};


module.exports = {
    getInst : function (){
        return new SearchService();
    }
};
