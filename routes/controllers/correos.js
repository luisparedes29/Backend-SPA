const crearCorreo = async () => {
  let testAccount = await nodemailer.createTestAccount()
  const nodemailer = require('nodemailer')

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  })

  let message = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Test email',
    text: 'This is a test email from Nodemailer',
    html: '<h1>SI SE PUEDE VENEZUELA<h1>',
  }

  let info = await transporter.sendMail(message)

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
