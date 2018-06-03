const Tweet = require('./tweet.js');

class User {
    constructor(name) {
        this.name = name;
        this.tweets = [];
        this.follows = [];
    }

    // add a new Tweet
    addTweet(text) {
        const newTweet = new Tweet(this.name, text);
        this.tweets.push(newTweet);  
        return newTweet;
    }

    // returns array of messages as strings
    getMessagesAsString() {
        const messages = [];
        for (let i = this.tweets.length-1; i >= 0; i--) {
            messages.push(this.tweets[i].toString());
        }
        return messages;
    }

    // return array of all the wall messages as strings
    getWall() {
        const wallTweets = this.tweets.slice();
        const wallTweetsAsString = [];

        for (let i = 0; i < this.follows.length; i++) {
            const followedTweets = this.follows[i].getTweets();
            wallTweets.push(...followedTweets);
        }

        wallTweets.sort(this.compareTweets);

        for (let i = 0; i < wallTweets.length; i++) {
            wallTweetsAsString.push(wallTweets[i].toStringWithAuthor());
        }

        return wallTweetsAsString;
    }

    // allows to order tweets by date
    compareTweets(a, b) {      
        let comparison = 0;
        if (a.getDate() > b.getDate()) {
          comparison = -1;
        } else if (a.getDate() < b.getDate()) {
          comparison = 1;
        }
        return comparison;
    }
    
    // returns all the tweets
    getTweets() {
        return this.tweets;
    }

    // subscribe to another user wall
    addFollower(followedUser) {
        this.follows.push(followedUser);
    }
}

module.exports = User;