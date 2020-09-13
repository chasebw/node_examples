
/*****************************
 * generateDartBoard
* This Code will generate an SVG that is a dart Board
*****************************/
function generateDartBoard() {
    var dartSVG = "";
    var dartSVG = "";

    var radius = 300;
    var r = radius;
    var centerX = 400;
    var centerY = 400;

    //Start SVG
    dartSVG += "<svg usemap='#dartMap' width='800' height='800'>";


    //Generate Shapes
    dartSVG += generateAllCircles(dartSVG, radius);
    dartSVG += generateLines(dartSVG, radius, centerX, centerY);

    dartSVG += generatePolygons(radius, centerX, centerY);

    dartSVG += "</svg>";



    //Replace HTML and Log
    $("#svg-holder").html(dartSVG);
    console.log("Finished Creating DartBoard")


}

/*****************************
* generateAllCircles
* This Code will generate circles for the dart board
*****************************/
function generateAllCircles(dartSVG, radius) {

    //variables
    circles = "";
    var colorArray = { 1: "red", 2: "orange", 3: "yellow", 4: "green" }
    var multiplier = .7;
    var r = parseInt(radius);


    //circle creator
    for (var i = 0; i < 4; i++) {
        circles += '<circle r="' + r + '"cx="400" cy="400" fill="' + colorArray[i] + '" stroke-width="8"\></circle>';
        r *= multiplier;
        multiplier -= .15
    }
    return circles;

}

/*****************************
* calcPointOnCircleAtRadians
* Used to calculate points on edge of circle 
*****************************/
function calcPointOnCircleAtRadians(radius, radians, centerX, centerY) {

    var x = parseInt(centerX + radius * Math.cos(radians));
    var y = parseInt(centerY + radius * Math.sin(radians));

    var strPoint = "x2='" + x.toString() + "'" + "y2='" + y.toString() + "' ";
    return strPoint;

}


function generateSingleLine(radius, radians, centerX, centerY) {

    const increment = Math.PI / 4;
    var line = "";
    var centerPoint = "";

    centerPoint += "<line "
    centerPoint += "x1='" + centerX + "' " + "y1='" + centerY + "' ";

    //Change Line Style here
    style = "style='stroke:rgb(128,128,128);stroke-width:2'></line>";


    point = calcPointOnCircleAtRadians(radius, radians, centerX, centerY);

    var blob = centerPoint + point + style;

    return centerPoint + point + style;

}


function generateLines(dartSVG, radius, centerX, centerY) {


    var radians = 0;
    var lines = "";

    for (var i = 0; i < 8; i++) {
        lines += generateSingleLine(radius, radians, centerX, centerY);
        radians += (Math.PI / 4); //Add 45 degrees
    }

    return lines;
    //Will generate Circles

}

function dist(x1,y1,x2,y2,centerX,centerY){

    xDist = (x1 - x2);
    yDist = (y2 - y1);

    return xDist.toString() + " " + yDist.toString();
}

function getPolygonCoordinates(radius, radians, centerX, centerY) {

    const increment = Math.PI / 4;

    var x1 = parseInt(centerX + radius * Math.cos(radians));
    var y1 = parseInt(centerY + radius * Math.sin(radians));

    var x2 = parseInt(centerX + radius * Math.cos(radians + increment));
    var y2 = parseInt(centerY + radius * Math.sin(radians + increment));

    centerX = centerX.toString();
    centerY = centerY.toString();

    //may need an if depending on quadrant

    path = "m " + centerX + " " + centerY + " ";
    //Draw Line
    path += "l " + (x1 - centerX).toString() + " " + (centerY - y1).toString() + " ";
    //Move Back
    path += "m " + ((x1 - centerX) * -1).toString() + " " + ((centerY - y1 ) * -1).toString() + " ";
    //Draw Line 
    path += "l " + (x2 - centerX).toString() + " " +((centerY - y2)).toString() + " ";

    path += "a " + "72 46 44" + " 0 1 " + dist(x1,y1,x2,y2); 


    //console.log(x1.toString() + "," + y1.toString() + "," + x2.toString() + "," + y2.toString() + "," + centerX.toString + "," + centerY.toString());

    return path;

}

function generateSinglePolygon(radius, radians, centerx, centery) {

    path = getPolygonCoordinates(radius, radians , centerx, centery);
    polygon = "<path class='polys' fill='none' stroke='red' d='" + path  +  "'></path>";

    return polygon;
}


function generatePolygons(radius, centerx, centery) {

    var radians = 0.0;
    var polygons = "";

    for (var i = 0; i < 8; i++) {
        polygons += generateSinglePolygon(radius, radians, centerx, centery);
        radians += Math.PI / 4;

    }
    console.log("Polygons Generated!");

    console.log(polygons);

    return polygons;

}