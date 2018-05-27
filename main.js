function main() {
    // communicate with console
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout 
    });

    const Social = require('./social.js');
    const social = new Social();

    function readUserInput() {
        rl.question("What are you up to?\n", (command) => {
            let action = command.split(" ")[1];
            let username = command.split(" ")[0];
            switch (action) {
                case "->":
                    console.log("posting​");
                    let message = command.split(" ")[2];
                    social.postMessage(username, message);
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

