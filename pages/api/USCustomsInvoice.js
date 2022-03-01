import dbConnect from '../../utils/dbConnect'
import USCustomsInvoice from '../../models/USCustomsInvoice'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const USCustomsInvoice = await USCustomsInvoice.find({})
        res.status(200).json({ success: true, data: USCustomsInvoice })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const USCustomsInvoice = await USCustomsInvoice.create(req.body)
        res.status(201).json({ success: true, data: USCustomsInvoice })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}