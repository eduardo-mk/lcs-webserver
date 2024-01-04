// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let hostname = 'localhost';
if (process.NODE_ENV === 'production') {
  hostname = 'backend_payments';
}

export default async function handler(req, res) {
  try {
    const backendResponse = await fetch(
      `http://${hostname}:4000/api/v1/payments/intent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );

    if (backendResponse.status >= 100 && backendResponse.status < 300) {
      console.log('NextJS_API : Stripe call successfull');
      // const data = await backendResponse.json();
      // res.status(200).json(data);
    } else {
      console.log('NextJS_API : Stripe call failed');
      console.error(backendResponse.status);
      // res.status(backendResponse.status).json({
      //   error: 'Payment intent failed',
      // });
    }

    const data = await backendResponse.json();
    res.status(backendResponse.status).json(data);
  } catch (e) {
    console.error('Payment intent failed');
    console.error(e);
    res.status(500).json({ error: 'Payment intent failed' });
  }
}
