// The export keyword is used to make features accessible outside of the 
// file so that they can be used by other parts of the application.


export class Name{
    constructor(public name:string , public second:string){
    }

    get nameMessage(){
        return `Hello: ${this.name} ${this.second}`;
    }
}
