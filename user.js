const Tweet = require('./tweet.js');

class User {
    constructor(name) {
        this.name = name;
        this.tweets = [];
    }
    addTweet (text) {
        const newTweet = new Tweet(text);
        this.tweets.push(newTweet);  
        return newTweet;
    }
}

module.exports = User;