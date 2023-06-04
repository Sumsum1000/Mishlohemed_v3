"use client";
import { InputAuthField } from "@/Components/shared/Shared";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const createAcountHandler = () => {
    router.push("/manager");
  };

  return (
    <PageContainer>
      <ButtonContainer>
        <InputAuthField />
        <InputAuthField />
        <InputAuthField />
      </ButtonContainer>
      <BasicBtn onClick={createAcountHandler} text={"צור חשבון"} />
    </PageContainer>
  );
};

export default Register;
