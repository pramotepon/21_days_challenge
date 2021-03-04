(() => {

    const carBrands = [
        'BMW',
        'Maserati',
        'Mercedes Benz',
        'Ferrari',
        'Toyota',
        'Honda',
        'Hyundai'
    ];

    const searchElem = document.querySelector('.search');

    function clearResult(){
        const ulElem = document.querySelector('.result');
        if (ulElem) {
            document.body.removeChild(ulElem);
        }
    }
    
    function selectCarBrand(event){
        searchElem.value = event.target.innerText;
        clearResult();
    }

    function onInput(event){
        clearResult();
        const inputText = event.target.value.toLowerCase();
        const matchCarBrands = carBrands.filter(carBrand => carBrand.toLowerCase().startsWith(inputText));
        
        const ulElem = document.createElement('ul');
        ulElem.classList.add('result');

        matchCarBrands.forEach(carBrand => {
            const liElem = document.createElement('li');
            liElem.innerText = carBrand;
            liElem.onclick = selectCarBrand;
            ulElem.appendChild(liElem);
        });
        document.body.appendChild(ulElem);
    }

    function run(){
        searchElem.addEventListener('input', onInput);
        document.addEventListener('click', clearResult);
    }
    run();
})();