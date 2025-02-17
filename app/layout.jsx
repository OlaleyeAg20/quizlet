import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Quizlet",
  description: "AI-powered quiz generator.",
  openGraph: {
    title: "Quizlet - AI Quiz Generator",
    description: "Generate AI-powered quizzes instantly.",
    url: "https://quizlet.com",
    siteName: "Quizlet",
    images: [
      {
        url: "/Images/hero.jpg", // Thumbnail when shared
        width: 1200,
        height: 630,
        alt: "Quizlet preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
