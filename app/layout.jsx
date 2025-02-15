import { Roboto } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/Logo";
import styles from "./page.module.css";
import { Button } from "@/components/Button";
import Link from "next/link";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <header className={styles.header}>
          <Link href='/'>
            <Logo />
          </Link>
          <nav>
            <ul>
              <li><a href="#">How To</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
