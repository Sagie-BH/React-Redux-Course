var module2 = (function () { // Open IIFE

    var internaldata = 10;
    // Body
    function internalFuncModule2() {
        console.log("module2.internalFuncModule 2");
    }

    // Exports (assigned to global variable `myModule`)
    return {
        openfunc: internalFuncModule2
    };
})(); // Close IIFE