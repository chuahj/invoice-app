/**
 * InvoiceController
 *
 * @description :: Server-side logic for managing invoices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
        Invoice.find({}).exec(function(err, invoice){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('list', {invoice:invoice});
        });
    },
    add: function(req, res){
        res.view('add');
    },
    create: function(req, res){
        var customerName = req.body.customerName;
        var modelName = req.body.modelName;

        Invoice.create({customerName:customerName, modelName:modelName}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/invoice/list');
        });
    },
    delete: function(req, res){
        Invoice.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/invoice/list');
        });
        return false;
    },
    edit: function(req, res){
        Invoice.findOne({id:req.params.id}).exec(function(err, invoice){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('edit', {invoice : invoice})
        });
    },
    details: function(req, res){
        Invoice.findOne({id:req.params.id}).exec(function(err, invoice){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            var xx = InvoiceService.calculateTest("4");
            res.view('details', {invoice : invoice})
        });
    }
    
    
};



