import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let hostname = 'localhost';
if (process.env.NODE_ENV === 'production') {
  hostname = 'backend_payments';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fetch(`http://${hostname}:4000/api/v1/patient/registration`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: req.body, // body data type must match "Content-Type" header
  })
    .then((rawResponse) => rawResponse.json())
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.error('Register users failed');
      console.error(e);
      res.status(500).send({ error: true });
    });
}
