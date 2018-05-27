const User = require('./user.js');
const Tweet = require('./tweet.js');

class Social {
    constructor() {
        this.users = [];
    }

    // if user exist, add a message
    postMessage(name, messsage) {
        if (this.isUser(name)) {
            this.isUser(name).addMessage();
        }
        else {
            const newUser = this.addUser(name);
            newUser.addMessage(text);
        }
        console.log(this.users);
    }

    addUser (name) {
        const newUser = new User(name);
        this.users.push(newUser); 
        return newUser; 
    }

    isUser (username) {
        for (let i = 0; i < this.users.length; i++) {
            if (username === this.users[i].name) {
                return this.users[i];
            }
        }
        return false;
    }
}

module.exports = Social;