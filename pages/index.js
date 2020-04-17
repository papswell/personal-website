import Link from "next/link";
import CenteredLayout from "../components/layouts/CenteredLayout";

export default function Index() {
  return (
    <CenteredLayout>
      <p>Hello Next.js</p>

      <Link href="/about">
        <a title="About Page">About Page</a>
      </Link>
    </CenteredLayout>
  );
}
