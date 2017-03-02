
var c = document.getElementById("vimage");
var xmlns = "http://www.w3.org/2000/svg";

var preX;
var preY;

function makeCircle(){
    var c1 = document.createElementNS( xmlns, "circle");
    c1.setAttribute("cx",event.offsetX)
    c1.setAttribute("cy",event.offsetY)
    c1.setAttribute("fill","red")
    c1.setAttribute("r","10")
    c.appendChild(c1)

    if ( preX != undefined && preY != undefined ){
    	var l = document.createElementNS( xmlns, "line" );
        l.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:1");
        l.setAttribute("x1", preX);
        l.setAttribute("y1", preY);
        l.setAttribute("x2", event.offsetX);
        l.setAttribute("y2", event.offsetY);
        l.setAttribute("stroke","black");
        c.appendChild(l);
    }
    preX = event.offsetX;
    preY = event.offsetY;
};


var clearSVG = function(){
	while (svg.lastChild) {
		svg.removeChild(svg.lastChild);
	};
    preX = undefined;
    preY = undefined;
}

c.addEventListener('click', function(e){
    makeCircle()
});

var clear = document.getElementById( "b" );
clear.addEventListener( "click", clearSVG );
