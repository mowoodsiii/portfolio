function constellation()
{
  var width = window.innerWidth,
	height = window.innerHeight,
	starcount = (width * height)/10000,
	randomx = 0,
	randomy = 0,
	randomr = 0;

d3.select('#starfield')
  .append('g')
    .attr('id','name')
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
var letter = d3.select('#name');

//First Name Constellation Lines and Fill
/*M*/letter.append('path').attr('class','constellationLines').attr('d','m-300 -10 l0 -100 l50 100 l50 -100 l0 100').attr('id','M');
letter.append('path').attr('class','constellationFill').attr('d','m-300 -10 l0 -100 l50 100 l50 -100 l0 100');

/*A*/letter.append('path').attr('class','constellationLines').attr('d','m-190 -10 l45 -100 l45 100').attr('id','A');
letter.append('path').attr('class','constellationFill').attr('d','m-190 -10 l45 -100 l45 100');

/*U*/letter.append('path').attr('class','constellationLines').attr('d','m-90 -110 l0 100 l80 0 l0 -100').attr('id','U');
letter.append('path').attr('class','constellationFill').attr('d','m-90 -110 l0 100 l80 0 l0 -100');

/*R*/letter.append('path').attr('class','constellationLines').attr('d','m10 -10 l0 -100 l40 0 l30 30 l-30 30 l-40 0 l70 40').attr('id','R');
letter.append('path').attr('class','constellationFill').attr('d','m10 -10 l0 -100 l40 0 l30 30 l-30 30 l-40 0 l70 40');

/*I*/letter.append('path').attr('class','constellationLines').attr('d','m100 -110 l20 0 l-10 0 l0 100 l10 0 l-20 0').attr('id','I');
letter.append('path').attr('class','constellationFill').attr('d','m100 -110 l10 100 l10 -100');

/*C*/letter.append('path').attr('class','constellationLines').attr('d','m210 -110 l-80 50 l80 50').attr('id','C');
letter.append('path').attr('class','constellationFill').attr('d','m210 -110 l-80 50 l80 50');

/*E*/letter.append('path').attr('class','constellationLines').attr('d','m300 -110 l-70 0 l0 50 l40 0 l-40 0 l0 50 l70 0').attr('id','E');
letter.append('path').attr('class','constellationFill').attr('d','m300 -110 l-70 0 l0 100 l70 0 l-70 -50 l70 -50');
 
//Last Name Constellation Lines and Fill
/*W*/letter.append('path').attr('class','constellationLines').attr('d','m-280 10 l0 100 l50 -50 l50 50 l0 -100').attr('id','W');
letter.append('path').attr('class','constellationFill').attr('d','m-280 10 l0 100 l50 -50 l50 50 l0 -100 l-50 50');

/*O*/letter.append('path').attr('class','constellationLines').attr('d','m-115 10 l50 20 l0 60 l-50 20 l-50 -20 l0 -60 l50 -20').attr('id','O1');
letter.append('path').attr('class','constellationFill').attr('d','m-115 10 l50 20 l0 60 l-50 20 l-50 -20 l0 -60 l50 -20');

/*O*/letter.append('path').attr('class','constellationLines').attr('d','m0 10 l50 20 l0 60 l-50 20 l-50 -20 l0 -60 l50 -20').attr('id','O2');
letter.append('path').attr('class','constellationFill').attr('d','m0 10 l50 20 l0 60 l-50 20 l-50 -20 l0 -60 l50 -20');

/*D*/letter.append('path').attr('class','constellationLines').attr('d','m65 10 l0 100 l60 0 l40 -50 l-40 -50 l-60 0').attr('id','D');
letter.append('path').attr('class','constellationFill').attr('d','m65 10 l0 100 l60 0 l40 -50 l-40 -50 l-60 0');

/*S*/letter.append('path').attr('class','constellationLines').attr('d','m245 10 l-70 25 l100 50 l-70 25').attr('id','S');
letter.append('path').attr('class','constellationFill').attr('d','m245 10 l-70 25 l100 50 l-70 25');

//Letter Stars
var dataset = []
d3.csv("./data/stars.csv", function(data) {
   dataset = data.map(function(d) { return [ +d["x"], +d["y"] ]; });
   length = dataset.length
  for (i=0; i<length; i++)
  {
    randomr = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    letter.append('circle').attr('class','namestar').attr('cx',dataset[i][0]).attr('cy',dataset[i][1]).attr('r',randomr);
  }
});

   //inspiration from https://www.dropbox.com/s/1cy0aiybljoyu8l/Screenshot%202014-03-20%2022.12.16.png
}
