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
        <Box sx={{ border: "1px solid black" }} />
        <Kehila name={"עבודה"} />
        <Box sx={{ border: "1px solid black" }} />
        <Kehila name={"חדר כושר"} />
        <Box sx={{ border: "1px solid black" }} />
      </Stack>

      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={createKehilaHandler}
        sx={{ marginTop: "30px" }}
      >
        צור קהילה חדשה
      </Button>
    </Stack>
  );
};
export default Manager;
