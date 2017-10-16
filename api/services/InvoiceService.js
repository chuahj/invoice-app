var grandTotal = 0;

var InvoiceService = {
    /**calculateTotal: function calculateTotalService(shoppingCartObj){
        for(i = 0; i < shoppingCartObj.length; i++){
            console.log(shoppingCartObj.length);
            var unitPrice = shoppingCartObj[i].unitPrice;
            var quantity = shoppingCartObj[i].quantity;
            var total = unitPrice * quantity;
            grandTotal += total;

        }
        console.log(grandTotal);
        return grandTotal;
    }*/

    calculateTotal : function (price, shoppingCartObj){
        console.log("Array Size :" +shoppingCartObj.length);
        /*console.log(moment("Fri Oct 13 2017 15:34:45 GMT+0800 (Malay Peninsula Standard Time").format('MM/DD/YYYY'));*/
        for(i=0; i < shoppingCartObj.length; i++){
            console.log("Unit price 2 :" + shoppingCartObj[i].unitPrice);
            grandTotal += shoppingCartObj[i].unitPrice * shoppingCartObj[i].itemQuantity;
        }
        return grandTotal;
    },
};

module.exports = InvoiceService;