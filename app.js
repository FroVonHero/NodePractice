const rect = {
    perimeter: (x,y) => 2 * (x + y),
    area: (x, y) => x * y
}

function solveRect(l, w) {
    console.log(`solving for rectangle with dimensions ${l}, ${w}`);

    if ( l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be graeter than zero. Recieved ${l}, ${w}`)
    } else {
        console.log(`area of rectangle ${rect.area(l,w)}`);
        console.log(`perimter of rectangle: ${rect.perimeter(l, w)}`)
    }
}

solveRect(5,6)
solveRect(8,4)
solveRect(-5,6)
solveRect(5,0)