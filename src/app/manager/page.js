"use client";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Manager = () => {
  const router = useRouter();
  const createKehilaHandler = () => {
    router.push("/create-kehila");
  };

  return (
    <PageContainer>
      <ButtonContainer>
        <Typography variant="h4" color="x" sx={{ marginBottom: 5 }}>
          ברוכים הבאים ארז
        </Typography>

        <Typography variant="h5">
          הפעילות שלנו
          <br /> גיוס חברתי לטובת משפחות ובודדים המטופלים ברווחה עבור מגוון
          צרכים מהותיים והכרחיים.
        </Typography>
      </ButtonContainer>

      <ButtonContainer>
        <Typography variant="h5">קהילות קימות</Typography>
        <div style={{ display: "flex" }}>
          <Typography variant="h4">קהילה 1</Typography>
          <Typography variant="h4">קהילה 2</Typography>
          <Typography variant="h4">קהילה 3</Typography>
        </div>
      </ButtonContainer>

      <ButtonContainer></ButtonContainer>
      <BasicBtn onClick={createKehilaHandler} text={"צור קהילה חדשה"} />
    </PageContainer>
  );
};
export default Manager;
