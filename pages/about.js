import FullScreen from "../components/layouts/FullScreen";
import Page from "../components/layouts/page";

export default function About() {
  return (
    <Page
      title="Working together | Pierre Guillaume"
      description="Web / mobile developer in Bordeaux, I can develop projects using NodeJS, React, PHP, Symfony, Docker, Android, Wordpress and much more!"
    >
      <FullScreen className="page">
        <main
          className="container"
          style={{ alignItems: "stretch", flexDirection: "column" }}
        >
          <h1>Let's work together</h1>
          <p>
            I am <strong>Pierre Guillaume</strong>, a french web "worker" living
            in Bordeaux. I develop web sites, APIs, games, mobile apps, and
            because i love to work with people, i am also a trainer.
          </p>

          <p style={{ textAlign: "center", padding: "32px 0" }}>
            <strong>
              If you have a digital project, i can help you to make it run soon.
            </strong>
          </p>

          <p>
            I can handle all the <strong>technical stuff</strong> for you
            (original webdesign included), so that you can{" "}
            <strong>focus on your business</strong>. In an agile collaboration,
            we will <strong>grow your ideas</strong> and bring{" "}
            <strong>the project to life</strong> :)
          </p>

          <p>Here are some examples of what i can do for you :</p>
          <ul>
            <li>
              <div>Build a custom yet performant website for your business</div>
            </li>
            <li>
              <div>
                Audit an exisiting web application and define a plan to improve
                it according to your unique constraints
              </div>
            </li>
            <li>
              <div>
                Create an API (<em>rest</em>, <em>graphql</em>, ...) to expose
                your data to the world
              </div>
            </li>
            <li>
              <div>
                Improve the workflow of your team, with setting up a CI, or
                creating tools to improve code quality,&nbsp;…
              </div>
            </li>
          </ul>

          {/* <p>This list is not exhaustive, so</p> */}

          <div className="link-container" style={{ alignSelf: "center" }}>
            <a href="mailto:contact@pierreguillau.me" className="button">
              <span>Let's talk about your project !</span>
            </a>
          </div>
          {/* <p>
        You can see <a href="">my personnal projects here</a>,{" "}
        <a href="">my professional projects there</a> and{" "}
        <a href="">play here</a>
      </p> */}
        </main>
      </FullScreen>
    </Page>
  );
}
