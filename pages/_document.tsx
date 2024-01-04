import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Footer from '../components/footer'
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div className='canvas'>
            <Main />
          </div>
            <NextScript />  
        </body>
   
      </Html>
    );
  }
}

export default MyDocument;
