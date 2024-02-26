import  nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'epallini@gmail.com',
    pass: 'not'
  }
});

export default transporter;