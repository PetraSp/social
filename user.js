const Tweet = require('./tweet.js');

class User {
    constructor(name) {
        this.name = name;
        this.tweets = [];
        this.follows = [];
    }

    addTweet(text) {
        const newTweet = new Tweet(this.name, text);
        this.tweets.push(newTweet);  
        return newTweet;
    }

    printMessages() {
        for (let i = this.tweets.length-1; i >= 0; i--) {
            console.log(this.tweets[i].toString());
        }
    }

    printWall() {
        const wallTweets = this.tweets.slice();

        for (let i = 0; i < this.follows.length; i++) {
            const followedTweets = this.follows[i].getTweets();
            wallTweets.push(...followedTweets);
        }

        wallTweets.sort(this.compareTweets);
        
        for (let i = 0; i < wallTweets.length; i++) {
            console.log(`${wallTweets[i].getAuthor()} - ${wallTweets[i].toString()}`);
        }
    }

    compareTweets(a, b) {      
        let comparison = 0;
        if (a.getDate() > b.getDate()) {
          comparison = -1;
        } else if (a.getDate() < b.getDate()) {
          comparison = 1;
        }
        return comparison;
    }

    getTweets() {
        return this.tweets;
    }

    addFollower(followName) {
        this.follows.push(followName);
    }
}

module.exports = User;