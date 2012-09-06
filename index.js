
var  XRegExp = require('xregexp').XRegExp;

/*
var rewriteTable = [
    { 'from' : '/assets/(?<op>\\w+)', 'to' : '/vatican/assets/${op}' },
];
*/
var rewrite = function(rewriteTable) {
    return function(req, res, next) {
        var index = 0,
            length = rewriteTable.length,
            rule = null,
            re = null;

        for (index = 0; index < length; index += 1) {
            rule = rewriteTable[index];
            re = XRegExp(rule.from);
            if(re.test(req.url)) {
                req.url = XRegExp.replace(req.url, re, rule.to);
                return next();
            }
        }
        next();
    };
};

module.exports = rewrite;
