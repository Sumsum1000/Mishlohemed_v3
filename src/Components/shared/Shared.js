"use client";
import { Box, Button, FilledInput, Stack } from "@mui/material";

export const BasicBtn = ({ onClick, text }) => {
  return (
    <Button onClick={onClick} variant="contained" fullWidth sx={{ padding: 5 }}>
      {text}
    </Button>
  );
};

export const InputAuthField = ({ placeholder, name }) => {
  return (
    <FilledInput
      fullWidth
      name={name}
      color="secondary"
      placeholder={placeholder}
      sx={{ padding: "6px" }}
    ></FilledInput>
  );
};

export const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        //backgroundColor: 'red',
        height: "75vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "40px",
      }}
    >
      {children}
    </Box>
  );
};

export const ButtonContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      {children}
    </Box>
  );
};

export const StackRow = ({ children }) => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      sx={{ width: "80%", borderBottom: "1px solid black" }}
    >
      {children}
    </Stack>
  );
};
