"use strict";
//PROMISE RESOLVE
//Con resolve, viene ritornato un valore
let p = Promise.resolve("Promise resolved");
p.then((response) => {
    console.log(response);
});
//PROMISE REJECT
let r = Promise.reject("Promise not resolved");
r.then(promiseResolved).catch(promiseNotResolved);
function promiseResolved(v) {
    console.log(v);
}
function promiseNotResolved(err) {
    console.log(err);
}
//INSIEME
let f = new Promise(function (resolve, reject) {
    //resolve(24);
    throw new Error("Reject con Throw");
});
f.then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
