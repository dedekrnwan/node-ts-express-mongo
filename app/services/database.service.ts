import * as mongoose from "mongoose";
import { fractal } from "./../config/database.config";

export class Database {
    constructor(){

    }
    
    fractal:any = async () => {
        await mongoose.connect(
            fractal.url, 
            {useNewUrlParser: true}
        );
        await mongoose.connection.on('connected', () => {
            console.log(`Mongoose ${fractal.schema} connection is open to ${fractal.url}`);
        });
        await mongoose.connection.on('error', (error) => {
            console.log(`Mongoose ${fractal.schema} connection at ${ fractal.url} has occured ${error} error`);
        });
        await mongoose.connection.on('disconnected', () => {
            console.log(`Mongoose ${fractal.schema} connection at ${ fractal.url} is disconnected`);
        });
        // process.on('SIGINT', function(){
        //     mongoose.connection.close(function(){
        //         console.log(`Mongoose ${fractal.schema} connection is disconnected due to application termination`);
        //         process.exit(0)
        //     });
        // });
    }
}