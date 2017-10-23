var InvoiceService = {

    calculateTotal : function (shoppingCartObj){
        var grandTotal = 0;

        /*console.log(moment("Fri Oct 13 2017 15:34:45 GMT+0800 (Malay Peninsula Standard Time").format('MM/DD/YYYY'));*/
        for(i=0; i < shoppingCartObj.length; i++){
            grandTotal += shoppingCartObj[i].unitPrice * shoppingCartObj[i].itemQuantity;
        }
        return grandTotal;
    },
    calculateGST : function(total){
        gstRate = 0.06;
        var gstVal = (gstRate * total).toFixed(2);
        return gstVal;
    },
    calculateGrandTotal : function(gst, total){
        return gst + total.toFixed(2);
    },
    calculateTest: function(x){
        var test = x + 1;
        console.log(test);
        return test;
    }

};

module.exports = InvoiceService;