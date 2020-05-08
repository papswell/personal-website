import Link from "next/link";
import FullScreen from "../components/layouts/FullScreen";

import TypeIt from "typeit-react";
import { useState, useEffect } from "react";
import Page from "../components/layouts/page";

export default function Index() {
  const [step, setStep] = useState("init");

  useEffect(() => {
    if (step === "init") {
      setStep("run");
    }
  }, []);

  return (
    <Page title="Pierre Guillaume | Développeur web à Bordeaux">
      <FullScreen className="page">
        <main style={{ alignItems: "center" }}>
          <div className="content">
            {step === "run" ? (
              <TypeIt
                element={"div"}
                options={{
                  afterComplete: () => {
                    setStep("complete");
                  },
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type('<span class="h1">Hi, I\'m Pierre.</span><br><br>')
                    .pause(750)
                    .type("I can ")
                    .type("<strong>code</strong>")
                    .type(" a project <em>for</em> you…")
                    .pause(1050)
                    .move(-19)
                    .delete("4")
                    .type("<strong>design</strong>")
                    .pause(900)
                    .delete(6)
                    .type("<strong>test</strong>")
                    .pause(900)
                    .delete("4")
                    .type("<strong>deploy</strong>")
                    .pause(800)
                    .delete("6")
                    .type("<strong>audit</strong>")
                    .pause(500)
                    .delete("5")
                    .type("<strong>manage</strong>")
                    .pause(400)
                    .delete("6")
                    .type(
                      "<strong>audit</strong>, <strong>design</strong>, <strong>code</strong>, <strong>test</strong>, <strong>deploy</strong>, and <strong>manage</strong>",
                      { speed: 70 }
                    )
                    .move("end", { speed: 20 })
                    .pause(2200)
                    .type(
                      "<br><br>But I <strong>develop</strong> <em>with</em> you"
                    )
                    .pause(1050)
                    .type(" <strong>:)</strong>");

                  return instance;
                }}
              ></TypeIt>
            ) : (
              <div style={{ opacity: step === "init" ? 0 : 1 }}>
                <h1>Hi, I'm Pierre.</h1>

                <p>
                  I can <strong>audit</strong>, <strong>design</strong>,{" "}
                  <strong>code</strong>, <strong>test</strong>,{" "}
                  <strong>deploy</strong>, and <strong>manage</strong> a projet{" "}
                  <em>for you&nbsp;…</em>
                </p>

                <p>
                  But i <strong>develop</strong> <em>with</em> you{" "}
                  <strong>:)</strong>
                </p>

                {step === "complete" && (
                  <div
                    className="link-container fadeIn"
                    style={{ marginTop: 64 }}
                  >
                    <Link href="/about">
                      <a className="button">
                        <span>What can we do together ?</span>
                      </a>
                    </Link>

                    {/* <Link href="/about">
                    <a>
                      <span>Get in touch</span>
                    </a>
                  </Link> */}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </FullScreen>
    </Page>
  );
}
