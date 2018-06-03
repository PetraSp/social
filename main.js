function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout 
    });

    const Social = require('./social.js');
    const social = new Social();

    function readUserInput() {
        rl.question("> ", (command) => {
            let action = command.split(" ")[1];
            let username = command.split(" ")[0];
            switch (action) {
                case "->":
                    let message = command.split(" -> ")[1];
                    social.postMessage(username, message);
                    break;
                case undefined:
                    const messages = social.readMessages(username);
                    for (let i = 0; i < messages.length; i++) {
                        console.log(messages[i]);
                    }
                    break;
                case "follows":
                    let followedName = command.split(" follows ")[1];
                    social.followUser(username, followedName);
                    break;
                case "wall":
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

