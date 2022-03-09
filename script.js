var a = prompt('a (birinchi bosh koffisient) ni kirit: ');
var b = prompt('b (ikkinchi hat) ni kirit: ');
var c = prompt('c (ozod hat) ni kirit: ');
var d = +(b * b) - +(4 * a * c)

document.write( '<p>' + ' D = ' + b + ' <sup>2</sup> ' + ' - ' + ' 4 ' + ' * ' + a + ' * ' + c + ' = ' + +d );