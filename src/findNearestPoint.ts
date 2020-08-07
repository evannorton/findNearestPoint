// Code Bounty
// assuming a collection of coordinates {x:1,y:1} inside an array, make a function that can find the next nearest point based on direction.

// direction meaning an enum where 1,2,3,4 are up, right, down, left.

// findNearestPoint(array:Array<cord>, currentIndex:number, direction:Direction):number

// Returns the answer index of next nearest point.

// $500 payment

interface cord {
    x: number;
    y: number;
}

type Direction = 1 | 2 | 3 | 4;

const findNearestPoint: (array: Array<cord>, currentIndex: number, direction: Direction) => number = (array: Array<cord>, currentIndex: number, direction: Direction): number => {
    const newCord: cord = {
        ...array[currentIndex]
    };
    switch (direction) {
        case 1:
            newCord.y++;
            break;
        case 2:
            newCord.x++;
            break;
        case 3:
            newCord.y--;
            break;
        case 4:
            newCord.x--;
            break;
    }
    const distances = array.map((cord: cord, key: number) => ({
        distance: Math.sqrt(Math.pow(cord.x - newCord.x, 2) + Math.pow(cord.y - newCord.y, 2)),
        key
    })).sort((a, b) => a.distance - b.distance);
    for (let i: number = 0; i < distances.length; i++) {
        if (i !== currentIndex) {
            return distances[i].key;
        }
    }
};

export default findNearestPoint;