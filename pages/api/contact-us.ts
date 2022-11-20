export default async function handler(req, res) {
  // console.log("sdsd")
}
  // const sgMail = require('@sendgrid/mail')

/*
export default async function handler(req, res) {
  // const {page} = req.query;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'benjamim.multimedia@gmail.com', // Change to your recipient
    from: 'apjio@sapo.pt.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    });

  // res.status(200).json(posts);
}

*/