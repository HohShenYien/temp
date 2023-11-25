import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./preflight.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={poppins.className}>
        <div className="bg-white">
          {/* <Sidebar /> */}
          <main className="relative flex min-h-screen flex-col items-stretch justify-stretch">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};
