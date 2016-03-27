/**
 * Created by Administrator on 2016/3/27 0027.
 */
var parser = new(less.Parser);

parser.parse('.class { width: 1 + 1 }', function (err, tree) {
    if (err) { return console.error(err) }
    console.log(tree.toCSS());
});
var less = require('less');

less.render('.class { width: 1 + 1 }', function (e, css) {
    console.log(css);
});