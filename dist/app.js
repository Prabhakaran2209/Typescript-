function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type gaurds
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
const result = add('tom', 'prabha');
//optional chaining
const fetchUserData = {
    id: '1',
    name: 'pk',
    job: { title: 'CEO', branch: 'VDP' }
};
console.log(fetchUserData.job.title);
