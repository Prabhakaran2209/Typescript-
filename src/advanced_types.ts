type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    name: string;
    startdate: Date;
};

type ElevatedEmployee = Admin & Employee;   //intersection types

let E1: ElevatedEmployee = {
    name: 'tom',
    privilages: ['server'],
    startdate: new Date()
};

type combined = string | number;   //union type
type numeric = number | boolean;

type universal = combined & numeric     //intersection can be used with anytypes

console.log('intersection types');

function add (a: combined, b: combined) {
    if(typeof a === 'string' || typeof b === 'string') {    //type gaurds
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}

type unknownEmployee = Employee | Admin;
 function printEmployeeInfo (emp: unknownEmployee) {
     console.log('Name: ' + emp.name);
     if ('privilages' in emp ) {
        console.log('privilages: ' + emp.privilages);
     }
     if ('startdate' in emp) {
         console.log('startDate: ' + emp.startdate);
     }
 }

 printEmployeeInfo (E1);

 class car {
     drive() {
        console.log('drive');
     }    
 }

 class truck {
     drive() {
        console.log('drive');     
     }

     loadcargo (amount: number) {
         console.log('quantity is ' + amount)
     }
 }

 type vehicle = car | truck;
 const v1 = new car();
 const v2 = new truck();

 function useVehicle(vehicle: vehicle) {
     vehicle.drive();
     if('loadcargo' in vehicle){   //only if it exists
         vehicle.loadcargo(1000);
     }
 }

 useVehicle(v1);
 useVehicle(v2);

 interface errorContainer {  //{ email: 'not a valid email', userName: 'Must strat with A'}
    id: string;
    [prop: string]: string;    //will accept any prop like email, username which if of string type

 }

 const errorBag: errorContainer = {
     id: 'number 1',
     userName: "Prabhakar"
 };

 



