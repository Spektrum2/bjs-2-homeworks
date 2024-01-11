//Задача № 1
function cachingDecoratorNew(func) {
    let cache = []

    function wrapper(...args) {
        const hash = args.join(', ');
        if (cache.length > 5) {
            cache.shift();
        }
        if (cache.filter((item) => item.hash === hash).length) {
            console.log(`Из кеша: ${cache.find((item) => item.hash === hash).value}`);
            return `Из кеша: ${cache.find((item) => item.hash === hash).value}`;
        } else {
            let result = func.call(this, ...args);
            cache.push({hash: hash, value: result});
            console.log("Вычисляем: " + result);
            return `Вычисляем: ${result}`
        }

    }

    return wrapper
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeout;

    function wrapper(...args) {
        const context = this;
        const arguments = args;
        wrapper.allCount += 1;
        if(!timeout) {
            wrapper.count += 1;
            func.apply(context, arguments);
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            wrapper.count += 1;
            func.apply(context, arguments);
        }, delay);
    }

    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}