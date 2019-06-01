var searchService = require('../services/SearchService.js').getInst();
var serviceHandler = require('../serviceHandler.js').serviceHandler;

module.exports.init = function(app) {

    app.get('/search', function(req, res){
        var triviaP = searchService.getSchoolByName(req.params.id);

        serviceHandler(req, res, triviaP);
    });

};
