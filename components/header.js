import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <header>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/work">
      <a style={linkStyle}>Work</a>
    </Link>
  </header>
);

export default Header;
