//point class
function point(x, y) {

    function getX() {
        return x;
    }

    function getY() {
        return y;
    }

    function moveTo(moveX, moveY) {
        x = moveX;
        y = moveY;
    }

    function toString() {
        return `x:${x} y:${y}`;
    }

    function copy() {
        return point(x, y);
    }

    return {
        getX,
        getY,
        moveTo,
        toString,
        copy
    }
}

// console.log("---------------------------------------");
// //initialize obj
// let p = point(5,5);

// //get obj parameters
// console.log(p.getX());
// console.log(p.getY());

// //move to 6,6
// p.moveTo(6,6);
// console.log(p.toString());

// //copy p
// let p1 = p.copy();
// console.log(p1.toString());
// console.log("---------------------------------------");

//circle class
function circle(center, radius) {

    if(typeof(center.x)==='number' && typeof(center.y)==='number') {
        center = point(center.x, center.y);
        //console.log(center.toString());
    }

    function getCenter() {
        return center.copy();
    }

    function getRadius() {
        return radius;
    }

    function moveTo(moveX, moveY) {
        center.moveTo(moveX, moveY);
    }

    function toString() {
        return `${center.toString()} radius:${radius}`;
    }

    return {
        getCenter,
        getRadius,
        moveTo,
        toString
    }
}

// console.log("---------------------------------------");
// //initialize obj
// let center = point(5,5);
// let circle1 = circle(center, 5);

// //get obj parameters
// console.log(circle1.getCenter());
// console.log(circle1.getRadius());

// //move to 6,6
// circle1.moveTo(6,6);
// console.log(circle1.toString());

// console.log("---------------------------------------");






//b - part of the exercise 1.3
// let center = point(3,3);
// const circles = [
//     circle(center, 6),
//     circle(center, 3),
//     circle(center, 4),
//     circle(center, 5),
//     circle(center, 7),
// ]

// const radiuses = circles.map(circle => {
//     return circle.getRadius();
// });

// for(let i=0; i<radiuses.length; i++) {
//     console.log(radiuses[i]);
// }



//c - part of the exercise 1.3
// let center = {x:5, y:6};
// let circle1 = circle(center, 6);
// console.log(circle1.toString());

// let center2 = point(5,6);
// let circle2 = circle(center2, 6);
// console.log(circle2.toString());