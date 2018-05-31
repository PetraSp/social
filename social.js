const User = require('./user.js');

class Social {
    constructor() {
        this.users = [];
    }

    // if user exist, add a message
    postMessage(name, messsage) {
        if (this.isUser(name)) {
            this.isUser(name).addTweet(messsage);
        // console.log(this.isUser(name));
        }
        else {
            const newUser = this.addUser(name);
            newUser.addTweet(messsage);
        }
    }

    read(username) {
        if (this.isUser(username)) {
            this.isUser(username).printMessages();
        }
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

    followUser(name, followName) {
        if (this.isUser(name)) {
            this.isUser(name).addFollower(followName);
        }
    }

    displayWall(username) {
        let withWall = true;
        this.isUser(username).printMessages(withWall);
        for (let i = 0; i < this.isUser(username).follows.length; i++) {
            this.isUser(this.isUser(username).follows[i]).printMessages(withWall);
        }
    }
}

module.exports = Social;