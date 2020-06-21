abstract class Departments1 {
    // id: number;
     //name: string;                     //All properties and methods are public by default
     private employees: string[] = []  //if declared private, then will not be able to access outise class
 
     constructor(public id: string, public name: string) {  //direct way of initialising the field variables
         //this.name = n;
     }
     
    abstract describe(this: Departments1) : void;
    
}


class AccountingDepartment1 extends Departments1 {
private lastreport: string;
constructor(id: string, public reports: string[]) {
    super( id, 'Accounts');  
    this.lastreport = reports[0];
}


describe() {          
    console.log('Accounting department - describe - ' + this.id);
}
}


