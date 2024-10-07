const nodemailer =requier('nodemailer');

const transporter = nodemailer.createTransport({
    service :'gmail',
    auth:{
        user:'xxxxxxxxx@gmail.com',
        pass:'xxxxxxxxxx',
    }
});

const mailOptions = {
    from: 'xxxxxxxx@gmail.com',
    to: 'xxxxxxxxxx@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent using Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
