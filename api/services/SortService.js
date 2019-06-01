var BaseService = require('./BaseService.js');
var _ = require('lodash');

function SortService() {
    BaseService.call(this);
}

SortService.prototype.getSchoolsSortBy = function(field){
    return this.schoolDataP.then(function(schools) {
        return _.sortBy(schools, [field]);
    });
};


module.exports = {
    getInst : function (){
        return new SortService();
    }
};
