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
d3.select('#starfield')
  .append('g')
    .attr('id','name')
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
var letter = d3.select('#name');

//First Name Constellation Lines and Fill
/*M*/letter.append('path').attr('class','constellation').attr('d','m-300 -10 l0 -100 l50 100 l50 -100 l0 100').attr('id','M');

/*A*/letter.append('path').attr('class','constellation').attr('d','m-190 -10 l45 -100 l45 100').attr('id','A');

/*U*/letter.append('path').attr('class','constellation').attr('d','m-90 -110 l0 100 l80 0 l0 -100').attr('id','U');

/*R*/letter.append('path').attr('class','constellation').attr('d','m10 -10 l0 -100 l40 0 l30 30 l-30 30 l-40 0 l70 40').attr('id','R');

/*I*/letter.append('path').attr('class','constellationLines').attr('d','m100 -110 l20 0 l-10 0 l0 100 l10 0 l-20 0').attr('id','I');
letter.append('path').attr('class','constellationFill').attr('d','m100 -110 l10 100 l10 -100');

/*C*/letter.append('path').attr('class','constellation').attr('d','m210 -110 l-80 50 l80 50').attr('id','C');

/*E*/letter.append('path').attr('class','constellationLines').attr('d','m300 -110 l-70 0 l0 50 l40 0 l-40 0 l0 50 l70 0').attr('id','E');
letter.append('path').attr('class','constellationFill').attr('d','m300 -110 l-70 0 l0 100 l70 0 l-70 -50 l70 -50');
 
//Last Name Constellation Lines and Fill
/*W*/letter.append('path').attr('class','constellationLines').attr('d','m-280 10 l0 100 l50 -50 l50 50 l0 -100').attr('id','W');
letter.append('path').attr('class','constellationFill').attr('d','m-280 10 l0 100 l50 -50 l50 50 l0 -100 l-50 50');

/*O*/letter.append('path').attr('class','constellation').attr('d','m-115 10 l50 20 l0 60 l-50 20 l-50 -20 l0 -60 l50 -20').attr('id','O1');

/*O*/letter.append('path').attr('class','constellation').attr('d','m0 10 l50 20 l0 60 l-50 20 l-50 -20 l0 -60 l50 -20').attr('id','O2');

/*D*/letter.append('path').attr('class','constellation').attr('d','m65 10 l0 100 l60 0 l40 -50 l-40 -50 l-60 0').attr('id','D');

/*S*/letter.append('path').attr('class','constellation').attr('d','m245 10 l-70 25 l100 50 l-70 25').attr('id','S');

//Letter Stars
var dataset = []
d3.csv("./data/stars.csv", function(data) {
   dataset = data.map(function(d) { return [ +d["x"], +d["y"], +d["r"] ]; });

for (i=0; i<2; i++)
{
  console.log("In for loop");
  console.log(dataset[0][0]);
  letter.append('circle').attr('class','namestar').attr('cx',dataset[i][0]).attr('cy',dataset[i][1]).attr('r',dataset[i][2]);
}

});

   //inspiration from https://www.dropbox.com/s/1cy0aiybljoyu8l/Screenshot%202014-03-20%2022.12.16.png
}
