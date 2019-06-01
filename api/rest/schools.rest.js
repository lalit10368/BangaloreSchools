var searchService = require('../services/SearchService.js').getInst();
var sortService = require('../services/SortService.js').getInst();
var serviceHandler = require('../serviceHandler.js').serviceHandler;
var Promise = require('bluebird');

module.exports.init = function(app) {

    app.get('/search', function(req, res){
        var searchP;
        if(req.query.name)
            searchP = searchService.getSchoolByName(req.query.name);
        if(req.query.address)
            searchP = searchService.getSchoolByAddress(req.query.address);
        if(req.query.area)
            searchP = searchService.getSchoolByArea(req.query.area);
        if(req.query.pincode)
            searchP = searchService.getSchoolByPincode(req.query.pincode);
        if(req.query.landmark)
            searchP = searchService.getSchoolByLandmark(req.query.landmark);

        searchP = searchP.then(function(result) {
            return {
                numResult : result.length,
                result : result
            };
        });

        serviceHandler(req, res, searchP);
    });

    app.get('/sort', function(req, res) {

        var sortP = sortService.getSchoolsSortBy(req.query.by).
            then(function(result) {
                return {
                    numResult : result.length,
                    result : result
                };
            });

        serviceHandler(req, res, sortP);
    }); 

    app.get('/filter', function(req, res) {
        var filterP;
        if(req.query.category)
            filterP = searchService.getSchoolByCategory(req.query.category);
        if(req.query.gender)
            filterP = searchService.getSchoolByGender(req.query.gender);
        if(req.query.medium)
            filterP = searchService.getSchoolByMedium(req.query.medium);

        filterP = filterP.then(function(result) {
            return {
                numResult : result.length,
                result : result
            };
        });

        serviceHandler(req, res, filterP);
    });



};
