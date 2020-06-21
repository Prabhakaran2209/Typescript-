class Departments1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // id: number;
        //name: string;                     //All properties and methods are public by default
        this.employees = []; //if declared private, then will not be able to access outise class
        //this.name = n;
    }
}
class AccountingDepartment1 extends Departments1 {
    constructor(id, reports) {
        super(id, 'Accounts');
        this.reports = reports;
        this.lastreport = reports[0];
    }
    describe() {
        console.log('Accounting department - describe - ' + this.id);
    }
}
