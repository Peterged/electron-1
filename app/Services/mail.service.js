const transporter = require("../Config/mail.config");
const path = require("path");
require("dotenv").config();

class MailService {
    sendMail = async (mailOptions) => {
        try {
            
            return info;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    async sendResetPasswordEmail(email, resetUrl) {
        const mailOptions = {
            from: process.env.MAIL_FROM_ADDRESS,
            sender: process.env.MAIL_FROM_ADDRESS,
            to: email,
            subject: "Reset your password",
            text: `Please click the following link to reset your password: ${resetUrl}`,
            // attachments: [
            //     {
            //         filename: "logo.png",
            //         path: path.join(__dirname, "../Resources/images/logo.png"),
            //         cid: "logo",
            //     },
            // ],
        };

        // You can also use an HTML template with the embedded image
        mailOptions.html = `
        <p>Please click the following link to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>Or copy and paste the link into your browser:</p>
        <p>${resetUrl}</p>
        <img src="cid:logo" alt="Logo" />
        `;

        try {
            await transporter.sendMail(mailOptions, (err, msg) => {
                if(err.message) {
                    console.log(err.message)
                    throw new Error(err.message);
                }

                console.log(err);

                // console.log(msg);
                console.log(`Reset password email sent to: ${email}`);
            })
            return true;
        }
        catch(error) {
            console.error(`Error sending reset password email: `, error);
            return false;
        }
    }
}

module.exports = MailService;