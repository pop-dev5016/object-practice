export default class User {
    constructor(email,name){
        this._email=email;
        this._name=name;
        
    }
    greeting(){
        return `my  name is ${this._name} and my email address is ${this._email}`
    }
} 