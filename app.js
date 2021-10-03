const rect = require('./rectangle');


function solveRect(l, w) {
    console.log(`solving for rectangle with dimensions ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR', err.message);
    } else {
        console.log(`area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
        console.log(`perimeter of rectangle with dimensions ${l}, ${w} is ${rectangle.perimeter()}`)
    }});
    console.log('This statement is logged after the call to rect()')
}

solveRect(5,6)
solveRect(8,4)
solveRect(-5,6)
solveRect(5,0)