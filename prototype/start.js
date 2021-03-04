(() => {
    // 1. Class vs Prototype
    // class Person {

    // }
    // const pramote = new Person();
    // console.log(pramote);

    // 2. What's prototype?
    // const name = 'Pramote';
    // console.log(name.__proto__);

    // const arr = [];
    // console.log(arr.__proto__);

    // 3. Prototype Chain
    // const name = 'Pramote';
    // console.log(name.__proto__);
    // console.log(name.toLocaleString);

    // 4. Extend a prototype
    const name = 'Pramote';
    function sayHello(val){
        console.log(`Hello ${val}`);
    }
    String.prototype.sayHello = sayHello;
    console.log(name.__proto__);
    name.sayHello('World')
})();