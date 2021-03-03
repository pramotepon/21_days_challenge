(() => {
    // 1. Lexical scope & Dinamic scope
    // function printName() {
    //     console.log(this);
    // }
    // printName();
    // 2. How to know what is this?
    // function printName() {
    //     console.log(this);
    //     console.log(`My name is ${this.name}`);
    // }

    // 2.1 Invoker Object
    // const pramote = { name: 'Pramote', printName };
    // const jane = { name: 'Jane', printName };
    // pramote.printName();
    // jane.printName();

    // 2.2 Global object (window, global)
    // name = 'Global';
    // printName();

    // 2.3 Construct function
    // function Person(name){
    //     this.name = name;
    //     this.printName = printName;
    // }
    // const pramote = new Person('Pramote');
    // pramote.printName();

    // 3. call(), apply(), and bind()
    function printName(nationality, city){
        console.log(this);
        console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);
    }

    function Person(name, nationality, city){
        this.name = name;
        this.nationality = nationality;
        this.city = city;

        printName(this.nationality, this.city);
        printName.call(this, this.nationality, this.city);
        printName.apply(this, [this.nationality, this.city]);
        
        const printPramote = printName.bind(this);
        printPramote(this.nationality, this.city);
    }

    const pramote = new Person('Pramote', 'Thai', 'Bangkok');
})();