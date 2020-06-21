class Department {
   // id: number;
    //name: string;                     //All properties and methods are public by default
    private employees: string[] = []  //if declared private, then will not be able to access outise class

    constructor(public id: string, public name: string) {  //direct way of initialising the field variables
        //this.name = n;
    }

    describe() {
        console.log(`Department ${this.id}: ${this.name}` )
    }

    addEmployee(employee: string) {
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
