function starfield() {
  var width = window.innerWidth,
	height = window.innerHeight,
	starcount = (width * height)/10000,
	randomx = 0,
	randomy = 0,
	randomr = 0;
	d3.select('body').append('svg').attr('width',width).attr('height',height).attr('id', 'stars').style('position','fixed').style('z-index','-3');
	console.log(width);
	console.log(height);
	console.log(starcount);

  for (counter = 0; counter < starcount; counter++)
  {
	randomx = Math.random () * width;
	randomy = Math.random () * height;
	randomr = Math.floor(Math.random() * (3 - 1 + 1)) + 1;;
	d3.select('#stars').append('circle').attr('cx', randomx).attr('cy', randomy).attr('r', randomr).style('fill','#bbb');
   }
   
   //inspiration from https://www.dropbox.com/s/1cy0aiybljoyu8l/Screenshot%202014-03-20%2022.12.16.png
}