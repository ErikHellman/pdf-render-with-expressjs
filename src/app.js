import express from 'express'
import PDFDocument from 'pdfkit'

const app = express()
const port = parseInt(process.env.SERVER_PORT || '4000')

app.get('/', (req, res) => {
    res.send('PDF Render app running!')
})

app.get('/createPdf', async (req, res) => {
    res.setHeader('Content-Type', 'application/pdf')
    const doc = new PDFDocument()
    doc.pipe(res)

    doc.fontSize(25).text('This is the title')
    doc.fontSize(12).text('This is a paragraph')

    doc.end()
})

app.listen(port, () => {
    console.log(`PDF Render listening on http://localhost:${port}`)
})