import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let hostname = 'localhost';
if (process.env.NODE_ENV === 'production') {
  hostname = 'backend_payments';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fetch(`http://${hostname}:4000/api/v1/appointment/check/hours`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
  })
    .then(async (res) => {
      return res.json();
    })
    .then((data) => {
      res.status(200).json({ ...data });
    })
    .catch((e) => {
      console.error('Check hours failed');
      console.error(e);
    });
}
