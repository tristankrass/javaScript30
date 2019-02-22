function addAllTheNums( number ) {
    let sum = 0;
    for ( let i = 0; i <= number; i++ ) {
        sum += i;
    }
    return sum;
}

function addAllTheNumsV2( number ) {
    return number * ( number + 1 ) / 2;
}
console.log( "Delete it" );

console.log( addAllTheNumsV2( 100 ) );
console.log( addAllTheNums( 100 ) );
