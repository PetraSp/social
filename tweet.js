class Tweet {
    constructor(authorName, text){
        this.authorName = authorName;
        this.text = text;
        this.date = Date.now();
    }

    toString() {
        return `${this.text} (${this.calculateTimeElapsed()})`;
    }

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

    getAuthor() {
        return this.authorName;
    }

    getDate() {
        return this.date;
    }
}

module.exports = Tweet;