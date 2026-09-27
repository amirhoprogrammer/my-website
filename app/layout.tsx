import type { Metadata } from "next";
import "./globals.css";
import Steady from "./Header/Steady";
import localFont from "next/font/local";
import ToastProvider from "@/components/ToastProvider";

const JetBrainsMono = localFont({
  src: [
    {
      path: "./fonts/ttf/JetBrainsMono-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ttf/JetBrainsMono-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ttf/JetBrainsMono-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Amirhossein Aminnegreshi",
  description: "Genereted by Amirhossein Aminnegreshi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${JetBrainsMono.className} min-h-full flex flex-col`}>
        <Steady />
        {/*<Header />*/}
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
