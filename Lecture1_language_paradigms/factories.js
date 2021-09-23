
function sequence(x) {
    function  next() {
        x++
        return x
    }
    return {next:next}
}

let s = sequence(0);
console.log(s.next());