function main() {
    // communicate with console
    const readline = require('readline');
    const rl =       readline.createInterface({
        input: process.stdin,
        output: process.stdout 
    });

    const Social = require('./social.js');
    const social = new Social();

    function readUserInput() {
        rl.question(">", (command) => {
            let action = command.split(" ")[1];
            let username = command.split(" ")[0];
            switch (action) {
                case "->":
                    // console.log("posting​");
                    let message = command.split(" -> ")[1];
                    social.postMessage(username, message);
                    break;
                case undefined:
                    // console.log("reading");
                    social.read(username);
                    break;
                case "follows":
                    // console.log("following");
                    let followName = command.split(" follows ")[1];
                    social.followUser(username, followName);
                    break;
                case "wall":
                    // console.log("wall");
                    social.displayWall(username);
                    break;
                case "exit":
                    console.log("exiting");
                    return rl.close();
                default:
                console.log("i don't understand");
            }
            readUserInput();
        });
    }
    readUserInput();
}

main();

