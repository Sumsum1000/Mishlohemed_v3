"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Box, ThemeProvider, Typography, Stack } from "@mui/material";
import logo from "../Graphics/Logo2.png";
import Image from "next/image";
//import { myTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider theme={myTheme}> */}
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Image alt="logo" placeholder="logo" src={logo} width={70} />
          <Typography variant="h4">מישלוחמד</Typography>
        </Stack>

        <Box>{children}</Box>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
