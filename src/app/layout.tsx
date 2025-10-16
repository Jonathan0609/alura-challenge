import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Chakra_Petch } from "next/font/google";

import "@/app/globals.css";
import { mantineTheme } from "@/core/config/mantine/theme";
import RootProviders from "./providers";

export const metadata = {
  title: "Alura challenge",
};

export const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body className={chakraPetch.className}>
        <RootProviders>
          <MantineProvider theme={mantineTheme}>
            <DatesProvider settings={{ locale: "pt-BR", firstDayOfWeek: 0 }}>
              {children}
            </DatesProvider>
          </MantineProvider>
        </RootProviders>
      </body>
    </html>
  );
}
