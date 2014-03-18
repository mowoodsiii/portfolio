function planetarium(t){

var solarSystem = d3.select('body');
var width = window.innerWidth,
  height = window.innerHeight,
  radius = Math.min(width, height);
	
var radii = {
  "sun": radius * 0.125,
  "mercury": radius * 0.005,
  "venus": radius * 0.01,
  "earth": radius * 0.01,
  "moon": radius * 0.0025,  
  "mars": radius * 0.008,
  "jupiter": radius * 0.055,
  "saturn": radius * 0.048,
  "uranus": radius * 0.038,
  "neptune": radius * 0.037,
  "mercuryOrbit": radius * 0.15,
  "venusOrbit": radius * 0.17,
  "earthOrbit": radius * 0.205,
  "moonOrbit": radius * 0.02,
  "marsOrbit": radius * 0.245,
  "asteroidBeltOrbit": radius * 0.31,
  "jupiterOrbit": radius * 0.4,
  "saturnOrbit": radius * 0.575,
  "uranusOrbit": radius * 0.75,
  "neptuneOrbit": radius * 0.9
};
	
var svg = solarSystem.append("svg")
  .attr("id", "planetarium")
  .attr("width", width)
  .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//Orbit Positions
	var mercuryOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.mercuryOrbit + 1)
	  .innerRadius(radii.mercuryOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var venusOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.venusOrbit + 1)
	  .innerRadius(radii.venusOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var earthOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.earthOrbit + 1)
	  .innerRadius(radii.earthOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var moonOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.moonOrbit + 1)
	  .innerRadius(radii.moonOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var marsOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.marsOrbit + 1)
	  .innerRadius(radii.marsOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var jupiterOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.jupiterOrbit + 1)
	  .innerRadius(radii.jupiterOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var saturnOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.saturnOrbit + 1)
	  .innerRadius(radii.saturnOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var uranusOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.uranusOrbit + 1)
	  .innerRadius(radii.uranusOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);
	var neptuneOrbitPosition = d3.svg.arc()
	  .outerRadius(radii.neptuneOrbit + 1)
	  .innerRadius(radii.neptuneOrbit - 1)
	  .startAngle(0)
	  .endAngle(0);

// Planet Orbit Rings
	// Mercury's orbit
	svg.append("circle")
	  .attr("class", "mercuryOrbit")
	  .attr("r", radii.mercuryOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)"); 
	// Venus' orbit
	svg.append("circle")
	  .attr("class", "venusOrbit")
	  .attr("r", radii.venusOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)"); 
	// Earth's orbit
	svg.append("circle")
	  .attr("class", "earthOrbit")
	  .attr("r", radii.earthOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)"); 
	// Moon's orbit
	svg.append("circle")
	  .attr("class", "moonOrbit")
	  .attr("r", radii.moonOrbit)
	  .attr("transform", "translate(0," + -radii.earthOrbit + ")")
	  .style("fill", "none")
	  .style("stroke", "rgba(113, 170, 255, 0.25)");
	// Mars' orbit
	svg.append("circle")
	  .attr("class", "marsOrbit")
	  .attr("r", radii.marsOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)");
	// Jupiter's orbit
	svg.append("circle")
	  .attr("class", "jupiterOrbit")
	  .attr("r", radii.jupiterOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)");
	// Saturn's orbit
	svg.append("circle")
	  .attr("class", "saturnOrbit")
	  .attr("r", radii.saturnOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)");
	// Uranus' orbit
	svg.append("circle")
	  .attr("class", "uranusOrbit")
	  .attr("r", radii.uranusOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)");
	// Neptune's orbit
	svg.append("circle")
	  .attr("class", "neptuneOrbit")
	  .attr("r", radii.neptuneOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(255, 204, 0, 0.25)");


//Orbit Progress Ring Segments
	// Current position of the Earth in its orbit
	svg.append("path")
	  .attr("class", "earthOrbitPosition")
	  .attr("d", earthOrbitPosition)
	  .style("fill", "rgba(255, 204, 0, 0.75)");
	// Current position of the Moon in its orbit
	svg.append("path")
	  .attr("class", "moonOrbitPosition")
	  .attr("d", moonOrbitPosition)
	  .attr("transform", "translate(0," + -radii.earthOrbit + ")")
	  .style("fill", "rgba(113, 170, 255, 0.75)");

//Planets
	// Sun Body
	svg.append("circle")
	  .attr("class", "sun")
	  .attr("r", radii.sun)
	  .style("fill", "rgba(255, 204, 0, 1.0)");
	// Mercury Planet
	svg.append("circle")
	  .attr("class", "mercury")
	  .attr("r", radii.mercury)
	  .attr("transform", "translate(0," + -radii.mercuryOrbit + ")")
	  .style("fill", "rgba(91, 91, 70, 1.0)");
	// Venus Planet
	svg.append("circle")
	  .attr("class", "venus")
	  .attr("r", radii.venus)
	  .attr("transform", "translate(0," + -radii.venusOrbit + ")")
	  .style("fill", "rgba(204, 153, 0, 1.0)");
	// Earth Planet
	svg.append("circle")
	  .attr("class", "earth")
	  .attr("r", radii.earth)
	  .attr("transform", "translate(0," + -radii.earthOrbit + ")") //call movement functions here? MIW
	  .style("fill", "rgba(113, 170, 255, 1.0)");
	// Moon Body
	svg.append("circle")
	  .attr("class", "moon")
	  .attr("r", radii.moon)
	  .attr("transform", "translate(0," + (-radii.earthOrbit + -radii.moonOrbit) + ")")
	  .style("fill", "rgba(150, 150, 150, 1.0)");
	// Mars Planet
	svg.append("circle")
	  .attr("class", "mars")
	  .attr("r", radii.mars)
	  .attr("transform", "translate(0," + -radii.marsOrbit + ")")
	  .style("fill", "rgba(190, 0, 0, 1.0)");
	// Asteroid Belt's orbit
	svg.append("circle")
	  .attr("class", "asteroidBeltOrbit")
	  .attr("r", radii.asteroidBeltOrbit)
	  .style("fill", "none")
	  .style("stroke", "rgba(149, 131, 114, 0.2)")
	  .style("stroke-width", "10pt");
	// Jupiter Planet
	svg.append("circle")
	  .attr("class", "jupiter")
	  .attr("r", radii.jupiter)
	  .attr("transform", "translate(0," + -radii.jupiterOrbit + ")")
	  .style("fill", "rgba(255, 159, 95, 1.0)");
	// Saturn Planet
	svg.append("circle")
	  .attr("class", "saturn")
	  .attr("r", radii.saturn)
	  .attr("transform", "translate(0," + -radii.saturnOrbit + ")")
	  .style("fill", "rgba(230, 204, 128, 1.0)");
	// Saturn's Rings
	svg.append("circle")
	  .attr("class", "saturnRings")
	  .attr("r", radii.saturn * 1.5)
	  .attr("transform", "translate(0," + -radii.saturnOrbit + ")")
	  .style("fill", "none")
	  .style("stroke", "rgba(178, 178, 178, 0.35)")
	  .style("stroke-width", "10pt");
	// Uranus Planet
	svg.append("circle")
	  .attr("class", "uranus")
	  .attr("r", radii.uranus)
	  .attr("transform", "translate(0," + -radii.uranusOrbit + ")")
	  .style("fill", "rgba(150, 232, 191, 1.0)");
	// Neptune Planet
	svg.append("circle")
	  .attr("class", "neptune")
	  .attr("r", radii.neptune)
	  .attr("transform", "translate(0," + -radii.neptuneOrbit + ")")
	  .style("fill", "rgba(113, 170, 255, 1.0)");

// Interpolate Positions
	var interpolateMercuryOrbitPosition = d3.interpolate(mercuryOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateVenusOrbitPosition = d3.interpolate(venusOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateEarthOrbitPosition = d3.interpolate(earthOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateMoonOrbitPosition = d3.interpolate(moonOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateMarsOrbitPosition = d3.interpolate(marsOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateJupiterOrbitPosition = d3.interpolate(jupiterOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateSaturnOrbitPosition = d3.interpolate(saturnOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateUranusOrbitPosition = d3.interpolate(uranusOrbitPosition.endAngle()(), (2 * Math.PI));
	var interpolateNeptuneOrbitPosition = d3.interpolate(neptuneOrbitPosition.endAngle()(), (2 * Math.PI));

// Animate Orbits
	/*d3.select(".earth")
	  .transition()
	  .attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")")
	    .duration(2000);*/

	d3.transition().tween("orbit", function () {
	    return function (t) {
	      // Animate Earth orbit position
	      d3.select(".earthOrbitPosition")
		.attr("d", earthOrbitPosition.endAngle(interpolateEarthOrbitPosition(t)))
	      // Animate Earth Planet position
	      d3.select(".earth")
		.attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")")
	      // Transition Moon orbit
	      d3.select(".moonOrbit")
		.attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");
	      // Transition Moon orbit position
	      d3.select(".moonOrbitPosition")
		.attr("d", moonOrbitPosition.endAngle(interpolateMoonOrbitPosition(t)))
		.attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");
	      // Transition Moon
	      d3.select(".moon")
		.attr("transform", "translate(" + (radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + radii.moonOrbit * Math.sin(interpolateMoonOrbitPosition(t) - moonOrbitPosition.startAngle()())) + "," + (-radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + -radii.moonOrbit * Math.cos(interpolateMoonOrbitPosition(t) - moonOrbitPosition.startAngle()())) + ")");
	    }
	})
	.duration(10000)
	.ease("linear");
}
