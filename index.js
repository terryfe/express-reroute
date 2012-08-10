var  XRegExp = require('xregexp').XRegExp;

/*
var rewriteTable = [
    { 'from' : '/assets/(?<op>\\w+)', 'to' : '/vatican/assets/${op}' },
];
*/
var rewrite = function(rewriteTable) {
    return function(req, res, next) {
        rewriteTable.forEach(function(item) {
            var re = XRegExp(item.from);
            if(re.test(req.url)) {
                req.url = XRegExp.replace(req.url, re, item.to);
                next();
            };
        });
        next();
    }
};

module.exports = rewrite;
