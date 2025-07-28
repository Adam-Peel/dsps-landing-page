import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import { HeaderSimple } from "../components/Header";
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";

export const metadata: Metadata = {
  title: "DS Property Consultants",
  description:
    "Homepage for DS Property Consultants, experts in supporting estate and lettings agents, and property buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <AppShell header={{ height: 56 }} padding="md">
            <AppShellHeader>
              <HeaderSimple />
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
