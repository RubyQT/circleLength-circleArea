function Circle(radius) {
    this.radius = radius
}

Circle.prototype.getLength = function () {
    return this.radius * 2 * Math.PI
}

Circle.prototype.getArea = function () {
    return Math.pow(this.radius, 2) * Math.PI
}
Circle.prototype.getLength = function () {
    return this.radius * 2 * Math.PI
}





// let area = circle.getArea;
// console.log(x)

document.getElementById('btn').onclick = function () {
    let x = document.getElementById('radius').value;
    // console.log(x)
    let circle = new Circle(x)
    // console.log(circle.getArea())
    document.getElementById('printArea').innerHTML = '面积为：' + circle.getArea().toFixed(2) + 'mm²'
    document.getElementById('printLength').innerHTML = '周长为：' + circle.getLength().toFixed(2) + 'mm'
    // circle.getArea()注意加括号，我没回括号查了好久
}
