import { PageContainer } from "@/Components/shared/Shared";
import { ThemeProvider, createTheme } from "@mui/material";
import { lime } from "@mui/material/colors";
import { Children } from "react";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#426872", //#a1c26d   #426872
    },
    secondary: {
      main: lime[200],
    },
    xColor: {
      main: "#FF2108",
    },
  },
  spacing: [0, 2, 4, 8, 16, 18, 22, 26, 28, 32, 60],
  typography: {
    fontFamily: "'Oswald'",
  },
});

export const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <PageContainer>{children}</PageContainer>
    </ThemeProvider>
  );
};

//import { Poppins, Arimo } from "next/font/google";
//import {  Arimo } from "next/font/google";

// const poppinsFont = Poppins({
//   weight: "700",
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

// const arimoFont = Arimo({
//   weight: "700",
//   subsets: ["hebrew"],
//   variable: "--font-arimo",
// });
