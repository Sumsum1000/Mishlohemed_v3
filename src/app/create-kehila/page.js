"use client";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
  InputAuthField,
  StackRow,
  Stack,
} from "@/Components/shared/Shared";
import {
  Box,
  Button,
  Typography,
  FormControl,
  TextField,
  FormLabel,
} from "@mui/material";
import { useRouter } from "next/navigation";

const CreateKehila = () => {
  const router = useRouter();
  const createKehilaHandler = () => {
    router.push("/manager");
  };

  return (
    <FormControl fullWidth sx={{ height: "80%", marginTop: "40px" }}>
      <FormLabel>שם קהילה</FormLabel>
      <TextField></TextField>
      <FormLabel>סוגי משלוח</FormLabel>
      <TextField></TextField>
      <FormLabel>בחר לוגו</FormLabel>
      <TextField></TextField>
      <Button
        onClick={createKehilaHandler}
        size="large"
        variant="contained"
        sx={{ marginTop: "auto" }}
      >
        צור קהילה
      </Button>
    </FormControl>
  );
};

export default CreateKehila;
