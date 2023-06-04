"use client";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
  InputAuthField,
  StackRow,
} from "@/Components/shared/Shared";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const CreateKehila = () => {
  const router = useRouter();
  const createKehilaHandler = () => {
    router.push("/kehila");
  };

  return (
    <PageContainer>
      <ButtonContainer>
        <InputAuthField placeholder="שם הקהילה" />
        <InputAuthField placeholder="סוגי משלוח" />
        <InputAuthField placeholder="בחר לוגו" />
        <StackRow>
          <Typography color="gray" variant="h5">
            עמותה לתרומה
          </Typography>
          <Typography variant="h5">מישלוחמד</Typography>
        </StackRow>
      </ButtonContainer>
      <ButtonContainer>
        <BasicBtn onClick={createKehilaHandler} text={"צור"} />
      </ButtonContainer>
    </PageContainer>
  );
};

export default CreateKehila;
