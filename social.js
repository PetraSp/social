const User = require('./user.js');

class Social {
    constructor() {
        this.users = [];
    }

    // if user exists, add a message, else create a new user and add a message
    postMessage(name, messsage) {
        if (this.findUser(name)) {
            this.findUser(name).addTweet(messsage);
        }
        else {
            const newUser = this.addUser(name);
            newUser.addTweet(messsage);
        }
    }

    // if user exists, return an array of his messages as string 
    readMessages(username) {
        if (this.findUser(username)) {
            return this.findUser(username).getMessagesAsString();
        }
    }

    addUser (name) {
        const newUser = new User(name);
        this.users.push(newUser); 
        return newUser; 
    }

    findUser (username) {
        for (let i = 0; i < this.users.length; i++) {
            if (username === this.users[i].name) {
                return this.users[i];
            }
        }
        return null;
    }

    followUser(name, followedName) {
        if (this.findUser(name)) {
            this.findUser(name).addFollower(this.findUser(followedName));
        }
    }

    displayWall(username) {
        if (this.findUser(username)) {
            this.findUser(username).printWall();
        }
    }
}

module.exports = Social;