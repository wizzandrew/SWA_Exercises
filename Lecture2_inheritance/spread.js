function firstAndRest(first, ...rest) {
    console.log('first: ', first)
    console.log('rest: ', rest)
}

firstAndRest(0,1,2,3)

const first = 0
const rest = [1,2,3]
const all = [first, ...rest] // [0,1,2,3]
// [first, rest] === [0, [1,2,3]]

//Spread - desctucturing
const o = {a:7, b:'Thirty'}
const o2={...o, c:'Dog'}
let {a, ...o3} = 02

