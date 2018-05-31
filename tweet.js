class Tweet {
    constructor(text){
        this.text = text;
        this.date = Date.now();
    }

    toString() {
      return `${this.text} (${new Date(Date.now() - this.date).getMinutes()} minutes ago)`;
    }
}

module.exports = Tweet;