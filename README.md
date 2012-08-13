express-reroute
===============

Rewrite middleware for express 3.0 ,using xregexp's named syntax

Usage
---------------
Require it:
    var reroute = require('express-reroute');

Define a rerwrite table:
  
    var rewriteTable = [
        { 'from' : '/assets/(?<op>\\w+)', 'to' : '/vatican/assets/${op}' }, //... etc
        ];

And use it:
    
    app.use(reroute(rewriteTable));

Rewrite table uses XRegExp's Named syntax. Enjoy.

XRegExp Syntax: http://xregexp.com/syntax/
