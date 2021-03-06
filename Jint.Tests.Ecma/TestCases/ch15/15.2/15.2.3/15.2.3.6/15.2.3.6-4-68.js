/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-68.js
 * @description Object.defineProperty - desc.value and name.value are two strings with different values (8.12.9 step 6)
 */


function testcase() {

        var obj = {};

        obj.foo = "abcd"; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperty(obj, "foo", { value: "fghj" });
        return dataPropertyAttributesAreCorrect(obj, "foo", "fghj", true, true, true);
    }
runTestCase(testcase);
