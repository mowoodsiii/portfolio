function starfield()
{
  var width = window.innerWidth,
	height = window.innerHeight,
	starcount = (width * height)/10000,
	randomx = 0,
	randomy = 0,
	randomr = 0;

d3.select('body').append('svg').attr('width',width).attr('height',height).attr('id', 'starfield').style('position','fixed').style('z-index','-3').append('g').attr('id','stars');

  for (counter = 0; counter < starcount; counter++)
  {
	randomx = Math.random () * width;
	randomy = Math.random () * height;
	randomr = Math.floor(Math.random() * (3 - 1 + 1)) + 1;;
	d3.select('#stars')
          .append('circle')
          .attr('class','star')
          .attr('cx', randomx)
          .attr('cy', randomy)
          .attr('r', randomr)
          .style('fill','#bbb');
  }
}
