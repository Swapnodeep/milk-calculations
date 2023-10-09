import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yield of Cream",
};

export default function CreamLayout({
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
