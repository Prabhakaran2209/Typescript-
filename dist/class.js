class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // id: number;
        //name: string;                     //All properties and methods are public by default
        this.employees = []; //if declared private, then will not be able to access outise class
        //this.name = n;
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
let dept = new Department('01', 'Accounting');
dept.describe();
dept.addEmployee('prabha');
dept.addEmployee('pk');
//dept.employees[2] = 'karan';
