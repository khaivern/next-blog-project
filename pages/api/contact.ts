import { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(401).json({
      message: 'UnAuthorized method detected',
    });
  }

  const { email, name, message } = req.body;

  // validation
  const emailIsValid = !email || !email.includes('@');
  const nameIsValid = !name || name.trim() === '';
  const messageIsValid = !message || message.trim() === '';

  if (!emailIsValid || !nameIsValid || !messageIsValid) {
    return res.status(422).json({
      message: 'Inputs validation failed',
    });
  }

  // storing to DB
  const contactData = {
    email,
    name,
    message,
  };

  return res.status(201).json({
    message: 'Message Sent Successfully',
  });
}

export default handler;
