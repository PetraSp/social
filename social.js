const User = require('./user.js');

class Social {
    constructor() {
        this.users = [];
    }

    // if user exist, add a message
    postMessage(name, messsage) {
        if (this.findUser(name)) {
            this.findUser(name).addTweet(messsage);
        }
        else {
            const newUser = this.addUser(name);
            newUser.addTweet(messsage);
        }
    }

    read(username) {
        if (this.findUser(username)) {
            this.findUser(username).printMessages();
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

    followUser(name, followerName) {
        if (this.findUser(name)) {
            this.findUser(name).addFollower(this.findUser(followerName));
        }
    }

    displayWall(username) {
        if (this.findUser(username)) {
            this.findUser(username).printWall();
        }
    }
}

module.exports = Social;