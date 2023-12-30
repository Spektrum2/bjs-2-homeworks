function parseCount(value) {
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = 1 / 2 * this.perimeter
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (err) {
        return  {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },

            get area() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}

let a = getTriangle(1,3,100)

console.log(a)