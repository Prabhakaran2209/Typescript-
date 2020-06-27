let E1 = {
    name: 'tom',
    privilages: ['server'],
    startdate: new Date()
};
console.log('intersection types');
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type gaurds
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privilages' in emp) {
        console.log('privilages: ' + emp.privilages);
    }
    if ('startdate' in emp) {
        console.log('startDate: ' + emp.startdate);
    }
}
printEmployeeInfo(E1);
class car {
    drive() {
        console.log('drive');
    }
}
class truck {
    drive() {
        console.log('drive');
    }
    loadcargo(amount) {
        console.log('quantity is ' + amount);
    }
}
const v1 = new car();
const v2 = new truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadcargo' in vehicle) { //only if it exists
        vehicle.loadcargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
const errorBag = {
    id: 'number 1',
    userName: "Prabhakar"
};
