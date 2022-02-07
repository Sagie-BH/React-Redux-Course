//--WHAT IS CLOUSRE
//--WHAT IS IIFE
//--MODULE DESIGN PATTERN


// - USUALLY LOCAL PARAMETERS DIE ONCE WE FINISH EXECUTE METHOD
// - INNER FUNCTION AND VARIABLRES ARE LIKE 'PRIVATE'
// - HIDE METHODS AND VARIABLES in LOCAL SCOPE
// - DO NOR POLUTE the GLOBAL ENVIORNMENT WITH EXTRA VARIBLE 
// - CLOSURE: KEEP LOCAL VARIABLE AND PARAMETERS OF OUTER FUNCTION LIVE
// - STRUCTURE LIKE CLASS WITH PRIVATE MEMBER


//WHAT IS CLOSURE 
//- STRUCTURE WITH LOGIC AND VARIABLES
//- HIDE INNER STATMENTS



function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name);
    }
    displayName();
}
init()
//--------------------------------

function makeFunc() {
    var name = 'Mozilla'; //PRIVATE 
    function displayName() { //Private
        alert(name);
    }
    return displayName;//PUBLIC
}

var myFunc = makeFunc(); //name is still live
myFunc();

//-----------------------------------
//the OUTER PARAMETER (X) IS LIVE IMN MEMORY 
function makeAdder(x) {
    return function (y) {
        let res = 1;
        for (let index = 0; index < y; index++) {
            res = x * res;
        }
        return res; //AVAILABLE FROM OUSIDE 
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
alert(add5(2));  // 25
alert(add10(2)); // 100
//-------------------------------------------
//Clousre && IIFE (Immediately-invoked Function Expression)
//MODULE DESIGN PATTERN
var counter = (function () {
    var privateCounter = 0; //PRIVATE MEMBER
    function changeBy(val) { //PRIVATE FUNCTION
        privateCounter += val;
    }


    //REURN PUBLIC MEMBER
    return {
        increment: function () {
            changeBy(1);
        },
        incrementBy: function (addedVal) {
            changeBy(addedVal);
        },

        decrement: function () {
            changeBy(-1);
        },

        value: function () {
            return privateCounter;
        }
    };
})();

counter.increment();
counter.increment();
counter.incrementBy(10);
counter.decrement();
alert(counter.value());//11
//---------------------------------------------------------------------------------

var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },

        decrement: function () {
            changeBy(-1);
        },

        value: function () {
            return privateCounter;
        }
    }
};

var counter1 = makeCounter();
counter1.increment();//1
counter1.increment();//2

var counter2 = makeCounter();//new Closure
alert(counter2.value()); //0 
//-------------------------------------------------------------------------------

























