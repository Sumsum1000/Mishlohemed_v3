"use client";
import { InputAuthField } from "@/Components/shared/Shared";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import {
  FormControl,
  FormLabel,
  TextField,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const nevigateToManagerHandler = () => {
    router.push("/manager");
  };

  return (
    <FormControl fullWidth sx={{ height: "80%", marginTop: "40px" }}>
      <FormLabel>מייל</FormLabel>
      <TextField></TextField>
      <FormLabel>סיסמה</FormLabel>
      <TextField></TextField>
      <Button
        onClick={nevigateToManagerHandler}
        size="large"
        variant="contained"
        sx={{ marginTop: "auto" }}
      >
        הרשם
      </Button>
    </FormControl>
  );
};

export default Login;
