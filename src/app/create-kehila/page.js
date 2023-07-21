"use client";
import { addKehila } from "@/Components/_Firebase/Utils";
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
import { useRef, useState } from "react";

const CreateKehila = () => {
  const newKehila = {
    name: "kehilaName",
    numOfMembers: 0,
    collectedMoney: 0,
    registeredMoney: 0,
    mishlohType: "none",
    members: [],
  };

  const router = useRouter();
  const nameRef = useRef();
  const [name, setName] = useState("");

  const createKehilaHandler = () => {
    const newKehila = {
      name: name,
      numOfMembers: 0,
      collectedMoney: 0,
      registeredMoney: 0,
      mishlohType: "none",
      members: [],
    };
    addKehila("Manager 2", newKehila);
    router.push("/manager");
  };

  return (
    <FormControl fullWidth sx={{ height: "80%", marginTop: "40px" }}>
      <FormLabel>שם קהילה</FormLabel>
      <TextField
        ref={nameRef}
        onChange={(e) => setName(e.target.value)}
      ></TextField>
      <FormLabel>סוגי משלוח</FormLabel>
      <TextField></TextField>
      <FormLabel>בחר לוגו</FormLabel>
      <TextField></TextField>
      <Button
        type="submit"
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
