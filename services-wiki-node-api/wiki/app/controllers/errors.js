module.exports = function (app) {
    
    //404
    app.use(function (req, res, next) {
        
        res.status(404);
        
        return res.json({ error: 'Not found' });

    });
    
    //500
    app.use(function (err, req, res, next) {
        res.send(500, 'Internal error: ' + err);
    });

};