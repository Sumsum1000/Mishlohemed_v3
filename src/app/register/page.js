"use client";

import { auth, googleProvider } from "@/Components/_Firebase/Firebase";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const createAcountHandler = () => {
  //   router.push("/manager");
  // };

  const registerHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/manager");
    } catch (error) {
      console.log(error);
    }
  };

  const registerGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl fullWidth sx={{ height: "80%", marginTop: "40px" }}>
      {/* <FormLabel>שם</FormLabel>
      <TextField></TextField> */}
      <FormLabel>מייל</FormLabel>
      <TextField onChange={(e) => setEmail(e.target.value)}></TextField>
      <FormLabel>סיסמה</FormLabel>
      <TextField onChange={(e) => setPassword(e.target.value)}></TextField>
      <Button
        onClick={registerGoogleHandler}
        size="large"
        variant="contained"
        sx={{ marginTop: "auto" }}
      >
        צור חשבון עם גוגל
      </Button>

      <Button
        onClick={registerHandler}
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
