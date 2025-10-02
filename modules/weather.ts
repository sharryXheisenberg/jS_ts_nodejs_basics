export class WeatherLocation{
    constructor(public weather:string , public city:string){
    }

    get weatherMessage(){
        return `Weather is:${this.weather} in the ${this.city}`;
    }
}