const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your@gmail.com',
    pass: 'your_password',
  },
});

// Read the EJS template file
const emailTemplatePath = 'path/to/emailTemplate.ejs';
const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');

// Compile the EJS template
const compiledTemplate = ejs.compile(emailTemplate);

// Define dynamic data
const dynamicData = 'This is dynamic content';
const username = 'John Doe';

// Render the template with dynamic data
const htmlContent = compiledTemplate({ username, dynamicData });

// Set up email options
const mailOptions = {
  from: 'm.hasanmzp@gmail.com',
  to: 'm.thenooob@gmail.com',
  subject: 'Subject of the Email',
  html: htmlContent,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
