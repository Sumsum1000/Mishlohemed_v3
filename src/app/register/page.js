"use client";

import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
  InputAuthField,
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
        <InputAuthField name="name" placeholder="שם" />
        <InputAuthField name="email" placeholder="אי מייל" />
        <InputAuthField name="password" placeholder="סיסמה" />
      </ButtonContainer>
      <BasicBtn onClick={createAcountHandler} text={"צור חשבון"} />
    </PageContainer>
  );
};

export default Register;
