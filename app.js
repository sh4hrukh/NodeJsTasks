var argv = require('minimist')(process.argv.slice(2));

switch (argv.operation) {
    case 'addition':
        let sum = 0;
        let result = argv._.forEach((val) => {
            sum += Number(val);
            return sum;
        });
        console.log(sum);
        break;

    case 'substraction':
        if(argv._.length === 2){
            let difference = argv._[0] - argv._[1];
            console.log(difference);
        }
        else {
            console.log('Substraction requires only 2 arguments!');
        }
        break;

    case 'multiplication':
        let product = 1;
        let result1 = argv._.forEach((val) => {
            product *= Number(val);
            return product;
        });
        console.log(product);
        break;

    case 'division':
        if(argv._.length === 2){
            let result = argv._[0] / argv._[1];
            console.log(result);
        }
        else {
            console.log('Division requires only 2 arguments!');
        }
        break;

    default:
        console.log('Please enter required operation to be performed!');
        break;
}

