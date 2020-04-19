import Link from "next/link";
import GitHubLogo from "./pictos/GitHubLogo";
import Email from "./pictos/Email";

const Footer = () => (
  <footer>
    <div className="icon-links">
      <a
        href="https://github.com/papswell"
        title="open source work on github"
        target="_blank"
      >
        <GitHubLogo size={24} />
      </a>{" "}
      <a href="mailto:contact@pierreguillau.me" title="email me !">
        <Email size={24} />
      </a>{" "}
    </div>
    <div className="made">
      <span>Made with &#10084; in Bordeaux</span>
      <span>{new Date().getFullYear()}</span>
    </div>
  </footer>
);

export default Footer;
