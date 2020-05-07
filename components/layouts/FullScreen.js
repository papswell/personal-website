import Footer from "../footer";
import Header from "../header";

import Head from "next/head";

const FullScreen = ({ children, title, ...props }) => {
  return (
    <div {...props}>
      <Head>
        <title>{title}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          
          ga('create', 'UA-165860714-1', 'auto');
          ga('send', 'pageview');
          `,
          }}
        ></script>
      </Head>

      <Header />

      {children}

      <Footer />

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            width: 100vw;
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default FullScreen;
