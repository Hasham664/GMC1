// pages/api/sendEmail.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { to, subject, message } = req.body;
  
      // Send the email using a library like Nodemailer or an email service
      // Here, we'll just log the details
  
      console.log('Email sent to:', to);
      console.log('Subject:', subject);
      console.log('Message:', message);
  
      // You can send a response if needed
      res.status(200).json({ message: 'Email sent successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  