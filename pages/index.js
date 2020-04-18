import Link from "next/link";
import FullScreen from "../components/layouts/FullScreen";
import Footer from "../components/footer";

export default function Index() {
  return (
    <FullScreen className="page">
      <main>
        <div className="content">
          <h1>
            Hi, I am <strong>Pierre</strong>.
          </h1>

          <p>
            I can{" "}
            <span className="typewritter">
              audit, design, code, test, deploy, and manage
            </span>{" "}
            a project <em>for you&nbsp;…</em>
          </p>

          <p>
            But I{" "}
            <span className="typewritter">
              <strong>develop</strong>
            </span>{" "}
            <em>with you</em> :)
          </p>
        </div>
      </main>

      <Footer />
    </FullScreen>
  );
}
