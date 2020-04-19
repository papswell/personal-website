import Link from "next/link";
import FullScreen from "../components/layouts/FullScreen";
import Footer from "../components/footer";
import Typewritter from "../components/typewritter";

export default function Index() {
  return (
    <FullScreen className="page">
      <main>
        <div className="content">
          <h1>
            <Typewritter speed={100}>Hi, I am Pierre.</Typewritter>
          </h1>

          <p>
            I can{" "}
            <Typewritter speed={100} delay={3000} className="strong">
              audit, design, code, test, deploy, and manage
            </Typewritter>
            <br />a project <em>for you&nbsp;…</em>
          </p>

          <p>
            But I{" "}
            <Typewritter speed={100} delay={6000} className="strong">
              develop
            </Typewritter>
            <em>with you</em> :)
          </p>
        </div>
      </main>

      <Footer />
    </FullScreen>
  );
}
