import Link from "next/link";

const Footer = () => (
  <footer>
    <a
      href="https://github.com/papswell"
      title="view on github"
      target="_blank"
    >
      {/* <Image width={64} /> */}
      OSS Work
    </a>{" "}
    <a href="mailto:contact@pierreguillau.me" title="email me !">
      Get in touch
    </a>{" "}
    <span>Made with &#10084; in Bordeaux</span>
    <span>{new Date().getFullYear()}</span>
  </footer>
);

export default Footer;
