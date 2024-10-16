import { Agent } from 'https'
import fetch from 'node-fetch'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// let paymentUrl = `http://localhost:${process.env.BACKEND_LOCAL_PORT}/api/v1/payments/intent`;
let paymentUrl = process.env.STRIPE_URL;
// if (process.env.NODE_ENV === 'production') {
//   paymentUrl = `${process.env.BACKEND_URL}/api/v1/payments/intent`;
// }

const agent = new Agent({
    rejectUnauthorized: false, // Disable SSL certificate verification
  });

export default async function handler(req, res) {
  try {
    console.log('Creating a payment intent', paymentUrl)
    const backendResponse = await fetch(paymentUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
      agent
    });

    if (backendResponse.status >= 100 && backendResponse.status < 300) {
      console.log('NextJS_API : Stripe call successfull');
      // const data = await backendResponse.json();
      // res.status(200).json(data);
    } else {
      console.log('NextJS_API : Stripe call failed');
      console.error(backendResponse.status);
      console.error(backendResponse)
      res.status(backendResponse.status).json({
        error: 'Payment intent failed',
      });
      return
    }

    const data = await backendResponse.json();
    res.status(backendResponse.status).json(data);
  } catch (e) {
    console.error('Payment intent failed');
    console.error(e);
    res.status(500).json({ error: 'Payment intent failed' });
  }
}
