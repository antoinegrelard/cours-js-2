// "use strict";
var stage = new Kinetic.Stage({container: 'canvas', width: 1024, height: 500});

var layerPath = new Kinetic.Layer();

var selectedColor;

for(var path in datas) {
	var shape = new Kinetic.Path({
		data: datas[path].path,
		stroke: "#000",
		strokeWidth: 4,
		fill: "#fff"
	});

	shape.on("click", function() {
		this.fill(selectedColor);
		layerPath.draw();
	});

	layerPath.add(shape);
}

var layerColors = new Kinetic.Layer({x: 600, y: 10});

var x = 50 + 5;
var y = 50 + 5;

for(var color in maPalette) {

	if (color % 5 === 0) {
		y = color * 10;
		x = 50 + 5;
	} else {
		x = x + 50;
	}


	var shape = new Kinetic.Rect({
		x: x,
		y: y,
		width: 50,
		height: 50,
		fill: maPalette[color]
	});

	shape.on("click", function() {
		selectedColor = this.attrs.fill;
		selectedColorBox.fill(selectedColor);
		layerSelectedColor.draw();
	});

	layerColors.add(shape);
}

var layerSelectedColor = new Kinetic.Layer({x: 655, y: 300});

var selectedColorBox = new Kinetic.Rect({
	width: 100,
	height: 50,
	stroke: 'black',
	fill: 'black'
});

layerSelectedColor.add(selectedColorBox);

stage.add(layerPath, layerColors, layerSelectedColor);