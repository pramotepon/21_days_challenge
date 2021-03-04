(() => {
    // 1. Nan
    // if (NaN * 1 == NaN) {
    //     console.log('Equal');
    // }

    // const result = 1 / 'hello';
    // if (Number.isNaN(result)) {
    //     console.log('Equal to NaN');
    // }

    // 2. Type Coercion
    if (1 > 2 > 3) {
        console.log('inside');
    }
    console.log(2 - '1');
    console.log(2 + '1');
    console.log(2 + Number.parseInt('1', 10));

    console.log(true + true);

    // 3. Interpreter & Compiler
    function getPerson() {
        return{
            name: 'Pramote'
        };
    }
    console.log(getPerson());

    // 4. Checking Object Type
    const person = {};
    if (typeof person === 'object' && person !== null) {
        console.log('Yes, object');
    }
})();