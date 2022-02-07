
let basketModule = (function () {

    var basket = [];
    function doPrivateWork() {
        alert("LOCAL PRIVATE doPrivateWork");
    }

    return {

        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        doPublicWork: doPrivateWork,
        getTotal: function () {
            var q = this.getItemCount();
            p = 0;

            //0==false
            while (q--) {
                p += basket[q].price;
            }

            return p;
        }
    };


})();

