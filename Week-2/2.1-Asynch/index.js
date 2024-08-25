function sum(a, b) {
    return a+b
}

let ans = sum(20,30)

console.log(ans)

function sum1(n) {
    let sum = 0
    for (let i=1;i<=n;i++) {
        sum += i
    }

    return sum
}

console.log(sum1(123))

function sum2(n) {
    
    return (n *(n+1))/2
}

console.log(sum2(123))

