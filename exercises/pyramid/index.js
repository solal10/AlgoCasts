// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let temp='';
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            temp+=' '
        }
        for(let j=n-i-1;j<n - i - 1 + (2 * i + 1);j++){
            temp+='#'
        }
        for(let j=n - i - 1 + (2 * i + 1);j<2 * n - 1;j++){
            temp+=' '
        }
        console.log(temp)
        temp=''
    }
}

module.exports = pyramid;
