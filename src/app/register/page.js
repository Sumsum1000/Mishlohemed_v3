"use client";

import { auth, googleProvider } from "@/Components/_Firebase/Firebase";
import { userStore } from "@/Components/store/userStore";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { addManager } from "@/Components/_Firebase/Utils";

const Register = () => {
  const router = useRouter();
  const { setName, user } = userStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [isSignin, setIsSignin] = useState(false);

  const registerHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      await addManager(email, "kululu");
      router.push("/manager");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user: ", user.email);
        setName(user.email);
        setCurrentUser(user);
        // User is signed in
        setIsSignin(true);
      } else {
        // User is signed out
        setIsSignin(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("user: ", user.name);
  }, [user]);

  return (
    <FormControl fullWidth sx={{ height: "80%", marginTop: "40px" }}>
      <FormLabel>שם</FormLabel>
      <TextField></TextField>
      <FormLabel>מייל</FormLabel>
      <TextField onChange={(e) => setEmail(e.target.value)}></TextField>
      <FormLabel>סיסמה</FormLabel>
      <TextField onChange={(e) => setPassword(e.target.value)}></TextField>

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
