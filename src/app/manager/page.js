"use client";
import Kehila from "@/Components/kehila/Kehila";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import Welcome from "@/Components/welcome/page";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Manager = () => {
  const router = useRouter();
  const createKehilaHandler = () => {
    router.push("/create-kehila");
  };

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "40px",
        height: "80%",
      }}
    >
      <Stack>
        <Typography variant="h4" color="x" sx={{ marginBottom: 5 }}>
          ברוכים הבאים ארז
        </Typography>
      </Stack>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Typography>הקהילות שלי</Typography>
        <Kehila name={"מושב חמד"} />
        <Kehila name={"עבודה"} />
        <Kehila name={"חדר כושר"} />
      </Stack>

      <Button
        fullWidth
        variant="contained"
        onClick={createKehilaHandler}
        sx={{ marginTop: "auto" }}
      >
        צור קהילה חדשה
      </Button>
    </Stack>
  );
};
export default Manager;
