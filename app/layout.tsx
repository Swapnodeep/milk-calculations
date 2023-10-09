import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milk Calculations",
  description:
    "This app streamlines the calculation and management of industry-level operations related to milk quality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-0 m-0 block box-border overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
