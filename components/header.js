import Link from "next/link";

const Header = () => (
  <header>
    <div className=""></div>

    <div>
      <Link href="/">
        <a className="logo">PG</a>
      </Link>
    </div>

    <div>
      <Link href="/about">
        <a className="">
          <span>About</span>
        </a>
      </Link>
    </div>
  </header>
);

export default Header;
