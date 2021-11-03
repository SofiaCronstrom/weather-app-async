
//class syntax is the newer way of adding a constructor.
        // class user {
        //     constructor(username, email){
        //         this.username = username;
        //         this.email = email;
        //         this.score = 0;
        //     }
        //     login(){
        //         console.log(`${this.username} just logged in`)
        //         return this;
        //     } 
        //     logout(){
        //         console.log(`${this.username} just logged out`);
        //         return this;
        //     }
        //     scoreInc(){
        //         this.score += 1;
        //         console.log(`${this.username} has a score of ${this.score}`)
        //         return this;
        //     }
        //}


//child constructor, it is only the object Admin that can use the deleteUser method.
    // class Admin extends user {
    //     constructor(username, email, titel){
//to access the parents constructor values I need to use super() otherwise it will throw an error
    //     super(username, email)
    //     this.titel = titel;
    // }
    // deleteUser(user){
    //  users = users.filter(u => u.username !== user.username);
    // }
    // }

function User (username, email){
    this.username = username;
    this.email = email;
    this.login = function login(){
        console.log(`${this.username} logged in`);
    }
}

    
const userOne = new User('Sofia', 'sofia@sofia.com');
const userTwo = new User('Jonathan', 'jonathan@jonathan.com');

userOne.login();
//const userThree = new Admin('sofia', 'sofia@hej.se', 'awesome');

// let users = [userOne, userTwo, userThree];

// userThree.deleteUser(userOne);
// console.log(userThree);

// userOne.login().logout().scoreInc();

