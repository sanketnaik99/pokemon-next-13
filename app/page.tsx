import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return <section className="body-font">This is the Root page</section>;
}
