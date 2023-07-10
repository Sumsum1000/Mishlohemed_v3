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
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { auth, googleProvider } from "../../Components/_Firebase/Firebase";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const nevigateToManagerHandler = () => {
  //   router.push("/manager");
  // };

  const loginUser = async () => {
    await createUserWithEmailAndPassword(auth, ema);
  };

  const loginEmailPasswordHandler = () => {
    signInWithRedirect(auth, googleProvider);
    router.push("/manager");
  };

  const loginGoogleHandler = () => {
    signInWithRedirect(auth, googleProvider);
  };

  return (
    <FormControl fullWidth sx={{ height: "80%", marginTop: "40px" }}>
      <FormLabel>מייל</FormLabel>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        placeholder="מייל"
      ></TextField>
      <FormLabel>סיסמה</FormLabel>
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        placeholder="סיסמה"
      ></TextField>
      {/* <Button
        onClick={loginGoogleHandler}
        size="large"
        variant="contained"
        sx={{ marginTop: "auto" }}
      >
        הרשם עם גוגל
      </Button> */}
      <Button
        onClick={loginEmailPasswordHandler}
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
