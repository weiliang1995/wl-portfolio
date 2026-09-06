import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ui";
import "@/styles/globals.less";

export const metadata: Metadata = {
  title: "Wei Liang — Portfolio",
  description:
    "Frontend engineer building web applications and the developer tooling around them.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ThemeProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
