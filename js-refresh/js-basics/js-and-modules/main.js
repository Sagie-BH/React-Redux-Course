var mainModule = (function () { // Open IIFE
    // Imports (via global variables)
    var importedFunc1 = module1.openfunc;
    var importedFunc2 = module2.openfunc;

    // Body
    function internalFuncA() {
        console.log("mainModule.internalFuncA");
    }
    function internalFuncB() {
        importedFunc1();
        importedFunc2();
        internalFuncA();
    }

    // Exports (assigned to global variable `myModule`)
    return {
        openfunc: internalFuncB,
    };
})(); // Close 