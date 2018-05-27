function main() {
    // communicate with console
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout 
    });

    function readUserInput() {
        rl.question("What are you up to?\n", (command) => {
            let action = command.split(" ")[1];
            switch (action) {
                case "->":
                    console.log("posting​");
                    break;
                case undefined:
                    console.log("reading");
                    break;
                case "follows":
                    console.log("following");
                    break;
                case "wall":
                    console.log("wall");
                    break;
                case "exit":
                    console.log("exiting");
                    return rl.close();
                default:
                console.log("i don't understand");
            }
            readUserInput();
        });
    };
    readUserInput();
}

main();

