import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"ShowSphere | Discover. Book. Experience.",description:"A complete cinema and events booking experience."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
