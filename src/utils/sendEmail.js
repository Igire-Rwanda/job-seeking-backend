const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'winny.ihirwe@gmail.com',
        password: 'raphersigqxqzrzb'
    }
});

let mailDetails = {
    from : 'gatarelydie370@gmail.com',
    to: 'eliseduse@gmail.com',
    subject: 'test email',
    text:'send email with nodemailer'
};

mailTransporter.sendMail(mailDetails, function(err, data){
    if(err){
        console.log('error occurs'+err);

    }else{
        console.log('Email sent Successfully');
    }
});


