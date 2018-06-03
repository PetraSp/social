class Tweet {
    constructor(authorName, text){
        this.authorName = authorName;
        this.text = text;
        this.date = Date.now();
    }

    // return tweet as string
    toString() {
        return `${this.text} (${this.calculateTimeElapsed()})`;
    }

    // return tweet as string including author
    toStringWithAuthor() {
        return `${this.getAuthor()} - ${this.text} (${this.calculateTimeElapsed()})`;
    }

    // calculates time since tweet was written
    calculateTimeElapsed() {
        //getSeconds while getMinutes are zero
        while (new Date(Date.now() - this.date).getMinutes() <= 0){
            return (new Date(Date.now() - this.date).getSeconds() + ' seconds ago');
        }
        
        let strTime = 'minutes'
        if (new Date(Date.now() - this.date).getMinutes() == 1){
            strTime = 'minute';
        }
        return (new Date(Date.now() - this.date).getMinutes()) + ' ' + strTime + ' ago';
    }

    // return author name
    getAuthor() {
        return this.authorName;
    }

    // return tweet date
    getDate() {
        return this.date;
    }
}

module.exports = Tweet;