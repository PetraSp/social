class Tweet {
    constructor(text){
        this.text = text;
        this.date = Date.now();
    }

    toString() {
      return `${this.text} (${new Date(this.date)})`;
    }
}

module.exports = Tweet;