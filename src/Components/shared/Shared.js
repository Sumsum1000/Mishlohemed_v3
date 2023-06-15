"use client";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Divider,
  FilledInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

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
      className="myClass" // impliment in css
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
        backgroundColor: "secondary",
        height: "100vh",
        width: "100vw",
        padding: "24px",
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

export const StackRow = ({ text1, text2 }) => {
  return (
    <Box>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{
          width: "100%",
          padding: "20px",
          paddingBottom: 0,
          borderRadius: "5px",
        }}
      >
        <Typography color="gray" variant="h5">
          {text1}
        </Typography>
        <Typography variant="h5">{text2}</Typography>
      </Stack>
      <Divider />
    </Box>
  );
};
