const nodemailer=require('nodemailer');

exports.sendEmail=async(options)=>{
        
     const transporer = nodemailer.createTransport({
           host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1cb00711f7e830",
    pass: "8242466cf35a2c"
  }
     });

     const mailOptions={
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
     }   

     await transporer.sendMail(mailOptions);  
}