const calculateCoordinates = ( coordinates: [number, number]) => {
    const x = coordinates[1] - 0
    const y = coordinates[0] - 0

    return Math.sqrt(x * x + y * y)
}

console.log(calculateCoordinates([5,3]))