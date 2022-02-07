var module1 = (function () { // Open IIFE

    var internaldata = 10;
    // Body
    function internalFuncModule1() {
        console.log("module1.internalFuncModule 1");
    }

    // Exports (assigned to global variable `myModule`)
    return {
        openfunc: internalFuncModule1
    };
})(); // Close I