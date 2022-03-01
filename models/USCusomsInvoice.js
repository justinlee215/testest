import mongoose from "mongoose"

const USCustomsInvoiceSchema = new mongoose.Schema({
    name: String,
    email: String
})

module.exports = mongoose.models.USCustomsInvoice || mongoose.model('USCustomsInvoice', USCustomsInvoiceSchema)
