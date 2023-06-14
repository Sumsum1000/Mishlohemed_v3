import { Box, ThemeProvider, Typography, Stack } from "@mui/material";
import logo from "../../Graphics/Logo2.png";
import Image from "next/image";

const SharedLogo = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <Image alt="logo" placeholder="logo" src={logo} width={70} />
        <Typography variant="h4">מישלוחמד</Typography>
      </Stack>

      {/* <Box>{children}</Box> */}
    </>
  );
};

export default SharedLogo;
