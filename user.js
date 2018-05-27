class User {
    constructor(name) {
        this.name = name;
        this.messages = [];
    }
    addMessage (message) {
        const newMessage = new Message(message);
        this.message.push(newMessage);  
        return message;
    }
}

module.exports = User;