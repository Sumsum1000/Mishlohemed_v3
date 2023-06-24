"use client";

// import {
//   BasicBtn,
//   PageContainer,
//   ButtonContainer,
//   InputAuthField,
// } from "@/Components/shared/Shared";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";

import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const createAcountHandler = () => {
    router.push("/manager");
  };

  return (
    <FormControl fullWidth sx={{ height: "80%", marginTop: "40px" }}>
      <FormLabel>שם</FormLabel>
      <TextField></TextField>
      <FormLabel>מייל</FormLabel>
      <TextField></TextField>
      <FormLabel>סיסמה</FormLabel>
      <TextField></TextField>
      <Button
        onClick={createAcountHandler}
        size="large"
        variant="contained"
        sx={{ marginTop: "auto" }}
      >
        צור חשבון
      </Button>
    </FormControl>
  );
};

export default Register;
//<PageContainer></PageContainer>
