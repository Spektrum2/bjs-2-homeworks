//  Задача 1. Печатное издание

class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    fix() {
        if (!(this.state === 100 || this.state === 0)) {
            this.state = this._state * 1.5;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

//Задача 2. Библиотека

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.filter((item) => item[type] === value);
        if (result.length) {
            return result[0];
        } else {
            return null
        }
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex((item) => item.name === bookName)
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        }
    }
}

// Задача 3. Журнал успеваемости

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        return this.marks[subject].reduce((acc, item, idx, arr) => {
            if (idx === arr.length - 1) {
                return (acc + item) / arr.length;
            } else {
                return acc + item;
            }
        })
    }

    getAverage() {
        let subject = Object.keys(this.marks);
        return subject.reduce((acc, item, idx, arr) => {
            if (idx === arr.length - 1) {
                return (acc + this.getAverageBySubject(item)) / arr.length;
            } else {
                return acc + this.getAverageBySubject(item);
            }

        }, 0)
    }
}
