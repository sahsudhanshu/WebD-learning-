const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


"use strict" // treat all JS code as newer version

// alert(3+3) //we are using nodejs, not browser


// For standards  https://tc39.es/ and mdn

// number => 2 to power 53
// bigint
// string => ""
// boolean 
// null => standalone value
// undefined => value asign nhi hui hai
// symbol => uniqueness

// object 

console.log(typeof null);
console.log(typeof undefined);
