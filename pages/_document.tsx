import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-stone-50 bg-gradient-to-r from-red-50 via-lime-50 to-red-50">
          {/* <div className="canvas"> */}
          <Main />
          {/* </div> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
