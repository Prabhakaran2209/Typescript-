class Departments {
    // id: number;
     //name: string;                     //All properties and methods are public by default
     private employees: string[] = []  //if declared private, then will not be able to access outise class
 
     constructor(public id: string, public name: string) {  //direct way of initialising the field variables
         //this.name = n;
     }

        static createEmployee(name: string) {     //static method demo
             return {Name: name}
        }

        static year = 2020;
     
     
    describe() {
        console.log(`Department ${this.id}: ${this.name}` )
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class IT extends Departments {
    constructor(id: string, public admins: string[]) {
        super( id, 'user');
        this.admins = admins;   
    }
}

class AccountingDepartment extends Departments {
    private lastreport: string;
    constructor(id: string, public reports: string[]) {
        super( id, 'Accounts');  
        this.lastreport = reports[0];
    }
  
    describe() {          //overriding describe method here
        console.log('Accounting department - describe - ' + this.id);
    }

    get recentreport() {
        if(this.lastreport) {
            return this.lastreport
        }
        throw new Error('No reports found.')
        
    }

    set recentreport(value: string) {
        if(!value) {
            throw new Error("pls pass a value")
        }
        this.addreports(value)

    }

    addreports(text: string) {
        this.reports.push(text);
        this.lastreport = text;
    }

    getreports() {
        console.log(this.reports);
    }
   
}

const employee1 = Departments.createEmployee('prabhakaran-QA');  //static method can be called direclty
console.log(employee1, Departments.year);  //static variable 

let depts = new IT('01', ['abcd']);
depts.describe();
depts.addEmployee('prabha');
depts.addEmployee('pk');

//let accounting = new AccountingDepartment('03', ['report1']);
let accounting = new AccountingDepartment('03', []);
accounting.recentreport = 'report55';   
//console.log(accounting.recentreport)
// accounting.addreports('hellooo');
// accounting.getreports();
console.log(accounting.describe())


