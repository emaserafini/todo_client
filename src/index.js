require('./foo.css');
var css = require('./index.css');
var a = require('./other.coffee');
import {f,g} from './another.es6'

console.log('coffe output', a.foo);
console.log(css);
console.log(f);
