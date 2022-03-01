import { dbConnect } from '../../utils/dbConnect'
import CanadaCustomsInvoice from '../../models/CanadaCustomsInvoice'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const canadaCustomsInvoice = await CanadaCustomsInvoice.find({})
        res.status(200).json({ success: true, data: canadaCustomsInvoice })
        console.log("This is all the data from the database: ", canadaCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const canadaCustomsInvoice = await CanadaCustomsInvoice.create(req.body.canadaCustomsInvoice)
        console.log("Form created: ", canadaCustomsInvoice)
        res.status(201).json({ success: true, data: canadaCustomsInvoice })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}