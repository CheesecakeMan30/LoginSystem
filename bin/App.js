class Application {
    constructor() {
        this.user = new Map();
    }

    register(username, password) {
        this.user.set(username, password);
        console.log("Registration successful!");
    }

    login(username, password) {
        if (this.user.has(username) && this.user.get(username) === password) {
            console.log("Login successful!");
            return true;
        } else {
            console.log("Invalid username or password, please try again");
            return false;
        }
    }
}

// Main app logic
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const loginSystem = new Application();

console.log("Welcome to the Login System!");
rl.question("Register a new user: \nUsername: ", (newusername) => {
    rl.question("Enter password: ", (newpassword) => {
        // Register the new user
        loginSystem.register(newusername, newpassword);

        rl.close();
    });
});
