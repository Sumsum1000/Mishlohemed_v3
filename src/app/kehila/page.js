"use client";
import {
  PageContainer,
  ButtonContainer,
  StackRow,
} from "@/Components/shared/Shared";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../Graphics/QR.jpg";

const Kehila = () => {
  return (
    <PageContainer>
      <ButtonContainer>
        <Typography variant="h4">קהילה: שכנים</Typography>

        <StackRow>
          <Typography color="gray" variant="h5">
            מספר חברים
          </Typography>
          <Typography variant="h5">36</Typography>
        </StackRow>

        <StackRow>
          <Typography color="gray" variant="h5">
            כסף שנאסף
          </Typography>
          <Typography variant="h5">2,740 שח</Typography>
        </StackRow>

        <StackRow>
          <Typography color="gray" variant="h5">
            כסף שנרשם
          </Typography>
          <Typography variant="h5">1,980 שח</Typography>
        </StackRow>

        <StackRow>
          <Typography color="gray" variant="h5">
            סוג משלוח
          </Typography>
          <Typography variant="h5">קטן/גדול</Typography>
        </StackRow>

        <StackRow>
          <Typography color="gray" variant="h5">
            עמותה לתרומה
          </Typography>
          <Typography variant="h5">מישלוחמד</Typography>
        </StackRow>

        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ width: "80%", marginTop: 9 }}
        >
          <Typography variant="h5">קישור לקהילה</Typography>
          <Image alt="logo" src={logo} width={70} />
        </Stack>
      </ButtonContainer>
    </PageContainer>
  );
};

export default Kehila;
