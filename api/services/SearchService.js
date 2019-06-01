var BaseService = require('./BaseService.js');
var _ = require('lodash');

function SearchService() {
    BaseService.call(this);
}

SearchService.prototype.getSchoolByName = function(schoolName){
    return this.schoolDataP.filter(function(school) {
        return school.schoolname.toLowerCase().indexOf(schoolName.toLowerCase()) > -1;
    });
};

SearchService.prototype.getSchoolByAddress = function(address) {
    return this.schoolDataP.filter(function(school){
        return school.address.toLowerCase().indexOf(address.toLowerCase()) > -1;
    });
};


SearchService.prototype.getSchoolByArea = function(area) {
    return this.schoolDataP.filter(function(school){
        return school.area.toLowerCase().indexOf(area.toLowerCase()) > -1;
    });
};


SearchService.prototype.getSchoolByPincode = function(pincode) {
    return this.schoolDataP.filter(function(school){
        return school.pincode == pincode;
    });
};


SearchService.prototype.getSchoolByLandmark = function(landmark) {
    return this.schoolDataP.filter(function(school){
        return school.landmark.toLowerCase().indexOf(landmark.toLowerCase()) > -1;
    });
};


SearchService.prototype.getSchoolByCategory = function(category) {
    return this.schoolDataP.filter(function(school){
        return school.category.toLowerCase().indexOf(category.toLowerCase()) > -1;
    });
};

SearchService.prototype.getSchoolByGender = function(gender) {
    return this.schoolDataP.filter(function(school){
        return school.gender.toLowerCase().indexOf(gender.toLowerCase()) > -1;
    });
};

SearchService.prototype.getSchoolByMedium = function(medium) {
    return this.schoolDataP.filter(function(school){
        return school.medium_of_inst.toLowerCase().indexOf(medium.toLowerCase()) > -1;
    });
};


module.exports = {
    getInst : function (){
        return new SearchService();
    }
};
