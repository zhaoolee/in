import React from 'react';
import ReactDOM from 'react-dom';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
            <div className="body_div">
                <Main />
                <NextScript />
            </div>

        </body>
      </Html>
    )
  }
}

export default MyDocument