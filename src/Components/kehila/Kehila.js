"use client";
import { Box, Typography, TextField, Stack, Paper } from "@mui/material";
import { StackRow } from "../shared/Shared";
import { useState } from "react";
import Image from "next/image";
import logo from "../../Graphics/QR.jpg";

const Kehila = ({ name }) => {
  const [expandToggle, setExpandToggle] = useState(false);

  const toggleExpand = () => {
    setExpandToggle(!expandToggle);
  };

  return (
    <Box onClick={toggleExpand}>
      <Paper elevation={3}>
        <Typography color={"primary"} variant="h5">
          {name}
        </Typography>
      </Paper>
      <br />
      {expandToggle && (
        <Stack spacing={2} sx={{ marginTop: "20px" }}>
          <StackRow text1="מספר חברים" text2="36" />
          <StackRow text1="כסף שנאסף" text2="2,740 שח" />
          <StackRow text1=" כסף שנרשם" text2="1,980 שח" />
          <StackRow text1=" סוג משלוח" text2="קטן\גדול" />
          <StackRow text1="עמותה לתרומה" ל text2="מישלוחמד" />

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ width: "80%", marginTop: 9 }}
          >
            <Typography variant="h5">קישור לקהילה</Typography>
            <Image alt="logo" src={logo} width={70} />
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default Kehila;
