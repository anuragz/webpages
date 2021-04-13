window.onload = function() {
	console.log("Hello world"); 
	data = '<a href="index.html">0</a> <a href="page-1.html">1</a> <a href="page-2.html">2</a>  <a href="page-3.html">3</a>  <a href="page-4.html">4</a>  <a href="page-5.html">5</a>'
	+' <a href="page-6.html">6</a> <a href="page-7.html">7</a> <a href="page-8.html">8</a> <a href="page-9.html">9</a> <a href="page-10.html">10</a>'
	+' <a href="page-10.html">11</a> <a href="page-10.html">12</a> <a href="page-10.html">13</a>  <a href="page-10.html">14</a>  <a href="page-10.html">15</a> <a href="page-10.html">16</a>'
	+' <a href="page-10.html">17</a> <a href="page-10.html">18</a> <a href="page-10.html">19</a> <a href="page-10.html">20</a> <a href="page-10.html">21</a>'
	+' <a href="page-10.html">22</a> <a href="page-10.html">23</a> <a href="page-10.html">24</a> <a href="page-10.html">25</a>';
	document.getElementById("pages").innerHTML = data;
};