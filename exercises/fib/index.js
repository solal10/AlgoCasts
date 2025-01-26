// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    fib_mem=[]
    fib_mem.push(0)
    fib_mem.push(1)
    for(let i=2;i<=n;i++){
        fib_mem.push(fib_mem[i-1]+fib_mem[i-2])
    }
    return fib_mem[n]

}

module.exports = fib;
