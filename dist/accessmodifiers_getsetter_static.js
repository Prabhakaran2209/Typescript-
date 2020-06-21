let Departments = /** @class */ (() => {
    class Departments {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            // id: number;
            //name: string;                     //All properties and methods are public by default
            this.employees = []; //if declared private, then will not be able to access outise class
            //this.name = n;
        }
        static createEmployee(name) {
            return { Name: name };
        }
        describe() {
            console.log(`Department ${this.id}: ${this.name}`);
        }
        addEmployee(employee) {
            this.employees.push(employee);
            console.log(this.employees.length);
            console.log(this.employees);
        }
    }
    Departments.year = 2020;
    return Departments;
})();
class IT extends Departments {
    constructor(id, admins) {
        super(id, 'user');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Departments {
    constructor(id, reports) {
        super(id, 'Accounts');
        this.reports = reports;
        this.lastreport = reports[0];
    }
    describe() {
        console.log('Accounting department - describe - ' + this.id);
    }
    get recentreport() {
        if (this.lastreport) {
            return this.lastreport;
        }
        throw new Error('No reports found.');
    }
    set recentreport(value) {
        if (!value) {
            throw new Error("pls pass a value");
        }
        this.addreports(value);
    }
    addreports(text) {
        this.reports.push(text);
        this.lastreport = text;
    }
    getreports() {
        console.log(this.reports);
    }
}
const employee1 = Departments.createEmployee('prabhakaran-QA'); //static method can be called direclty
console.log(employee1, Departments.year); //static variable 
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
console.log(accounting.describe());
