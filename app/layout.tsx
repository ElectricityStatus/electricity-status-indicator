import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <div className="w-full flex-grow">
            <div className="max-w-[1300px] w-full mx-auto px-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
