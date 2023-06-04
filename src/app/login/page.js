"use client";
import { InputAuthField } from "@/Components/shared/Shared";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const nevigateToManagerHandler = () => {
    router.push("/manager");
  };

  return (
    <PageContainer>
      <ButtonContainer>
        <InputAuthField placeholder={"אי מייל"} />
        <InputAuthField placeholder={"סיסמה"} />
      </ButtonContainer>
      <BasicBtn onClick={nevigateToManagerHandler} text={"התחבר"} />
    </PageContainer>
  );
};

export default Login;
