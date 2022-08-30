//var md = require('markdown-it')(),
import  'https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js';
var md = window.markdownit();

//	mk = require('./index');
import { default as mk } from './index.js';

md.use(mk);

var input = document.getElementById('input'),
	output = document.getElementById('output'),
	button = document.getElementById('button');

button.addEventListener('click', function(ev){

	var result = md.render(input.value);

	output.innerHTML = result;

});
