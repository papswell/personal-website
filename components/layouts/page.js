import { useEffect, useState } from "react";
import { get, set, clear } from "./../../utils/cookies";
import RGPD from "../rgpd-modal";
import Head from "next/head";

const ACCEPT_VALUE = "1";

const Page = ({ children, title, description }) => {
  const [shouldPrompt, updateShouldPrompt] = useState(true);
  const [insertGA, allowGA] = useState(false);

  useEffect(() => {
    const accept = get("accept_cookies");
    if (accept === ACCEPT_VALUE) {
      updateShouldPrompt(false);
      allowGA(true);
    }
  }, [shouldPrompt]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {insertGA && (
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
        )}
      </Head>

      {children}

      <RGPD
        isOpen={shouldPrompt}
        onAccept={() => {
          set("accept_cookies", ACCEPT_VALUE);
          updateShouldPrompt(false);
        }}
        onDecline={() => {
          clear();
          updateShouldPrompt(false);
        }}
      />
    </>
  );
};

export default Page;
