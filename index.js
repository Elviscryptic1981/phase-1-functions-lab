// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
}

function distanceFromHqInBlocks(street) {
    const blocks = distanceFromHqInBlocks(street)
    const feetPerBlock = 264;
    return blocks * feetPerBlock
}

function distanceFromHqInBlocks(start, destination) {
    const blocks = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
}

if(distance <= 400) {
    return 0;
} else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
} else if (distance > 2000 && distance <= 2500){
    return 25; 
} else {
    return 'cannot travel that far';
}