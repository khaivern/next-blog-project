import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/database';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(401).json({
      message: 'UnAuthorized method detected',
    });
  }

  const { email, name, message } = req.body;

  // validation
  const emailIsValid = email || email.includes('@');
  const nameIsValid = name || name.trim() !== '';
  const messageIsValid = message || message.trim() !== '';

  if (!emailIsValid || !nameIsValid || !messageIsValid) {
    return res.status(422).json({
      message: 'Inputs validation failed',
    });
  }

  // storing to DB
  const contactData: {
    email: string;
    name: string;
    message: string;
    id?: string;
  } = {
    email,
    name,
    message,
  };

  let messagesCollection;
  try {
    const client = await connectToDatabase();
    messagesCollection = client.db().collection('messages');
  } catch (err) {
    return res.status(500).json({ message: 'Failed to connect to database' });
  }

  let result;
  try {
    result = await messagesCollection.insertOne(contactData);
    contactData.id = result.insertedId.toString();
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Failed to insert record to collection' });
  }

  return res.status(201).json({
    message: 'Message Sent Successfully',
    contactData,
  });
}

export default handler;
