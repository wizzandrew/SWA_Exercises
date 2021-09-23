//methods

const rect = {
    width: 100,
    height: 200,
    area: function () {return this.width * this.height}
}

console.log(rect.area());

//problem
let reactArea = rect.area;
//has no context
console.log(reactArea());

//The 'call' decides the context - not the obj or function

//Solutions:
//1 - use call()
console.log(reactArea.call(rect));

//2 - use bind()
reactArea = rect.area.bind(rect);
console.log(reactArea());

//3 - use anonymous func
reactArea = () => rect.area();
// button.onclick = () => rect.area();

//4 - dont use this
