import mongoose from "mongoose"

const CanadaCustomsInvoiceSchema = new mongoose.Schema({
    // [{step: Number}]: {
        shipperName: String,
        shipperContact: String,
        shipperAddress: String,
        shipperPhone: String,
    // },
    // step: {
        exporterName: String,
        exporterContact: String,
        exporterAddress: String,
        exporterPhone: String,
    // }
          otherRefNosName: String,
        consigneePhone: String,
        consigneeAddress: String,
        consigneeIRS: String,

              buyerPhone: String,
        buyerAddress: String,
        buyerIRS: String,
  
}, {collection: 'canada_customs_invoce_submission'})

// module.exports = mongoose.model('CanadaCustomsInvoice', CanadaCustomsInvoiceSchema)
module.exports = mongoose.models.CanadaCustomsInvoice || mongoose.model('CanadaCustomsInvoice', CanadaCustomsInvoiceSchema)

