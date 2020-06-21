function amlearning() {
    console.log(" am learning")
}

function javascript () {
    return new Promise(function (resolve) {
        setTimeout (function () {
            console.log("javascript");
            resolve();
        }, 2000)

    })  
}

function jasmine() {
    console.log("jasmine")
}

async function test() {
    amlearning();
    await javascript();
    jasmine();
}

test();
