"use client";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();

  const clickRegisterHandler = () => {
    router.push("/register");
  };

  const clickLoginHandler = () => {
    router.push("/login");
  };

  return (
    <PageContainer>
      <ButtonContainer>
        <Typography variant="h3">ברוכים הבאים</Typography>
        <Typography variant="h5">להתחבר - לתרום - לעזור</Typography>
      </ButtonContainer>
      <ButtonContainer>
        <BasicBtn
          rel="stylesheet preload"
          onClick={clickLoginHandler}
          text={"התחבר"}
        />
        <BasicBtn
          rel="stylesheet preload"
          onClick={clickRegisterHandler}
          text={"צור חשבון"}
        />
      </ButtonContainer>
    </PageContainer>
  );
};
export default Welcome;
