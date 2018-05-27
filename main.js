function main() {
    // communicate with console
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout 
    });

    function readUserInput() {
        rl.question("What are you up to?\n", (command) => {
            console.log(command);
            readUserInput();
        });
    };
    readUserInput();
}

main();

