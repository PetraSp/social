const Tweet = require('./tweet.js');

class User {
    constructor(name) {
        this.name = name;
        this.messages = [];
    }
    addMessage (message) {
        const newMessage = new Tweet(message);
        this.messages.push(newMessage);  
        return message;
    }
}

module.exports = User;