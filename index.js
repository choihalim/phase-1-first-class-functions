function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function hello(){console.log("hello")};
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log("anonymous");
    }
}