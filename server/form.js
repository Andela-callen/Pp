// import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

module.exports = {
  sendMessage: (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!req.body) {
      return res.status(400).json({
        message: 'Make sure to enter required data',
      });
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: process.env.YAHOO_EMAIL,
      from: email,
      name,
      subject,
      text: message,
      html: `<strong> ${message} </strong>`
    };
    sgMail.send(msg);
    return res.status(200).json({
      message: 'Message sent'
    });
  }
};
