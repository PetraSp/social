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

    printMessages(wall) {
        let strName = "";

        if (wall) {
            strName = this.name.toString() + ' - ';
        }

        for (let i = 0; i < this.tweets.length; i++) {
            console.log(strName + (this.tweets[i].toString()));
        }
    }
}

module.exports = User;