"use client";
import {
  Typography,
  TextField,
  Stack,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { StackRow } from "../shared/Shared";
import { useState } from "react";
import Image from "next/image";
import logo from "../../Graphics/QR.jpg";
import { useRouter } from "next/navigation";

const Kehila = ({ name }) => {
  const router = useRouter();

  const nevigateToMembersHandler = () => {
    router.push("/members");
  };

  const [expandToggle, setExpandToggle] = useState(false);
  const [size, setSize, setValue] = useState("ללא");
  const [amuta, setAmuta] = useState("ללא");

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
    setExpandToggle(true);
  };

  const handleAmutaChange = (e) => {
    e.preventDefault();
    setAmuta(e.target.value);
    setExpandToggle(true);
  };

  const toggleExpand = () => {
    if (!expandToggle) {
      setExpandToggle(true);
    }
    if (expandToggle) {
      setExpandToggle(false);
    }
  };

  return (
    <FormControl onClick={toggleExpand}>
      <TextField
        fullWidth
        disabled
        defaultValue={name}
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
        sx={{
          direction: "rtl",
          backgroundColor: "lightgray",
        }}
      ></TextField>
      <br />
      {expandToggle && (
        <Stack spacing={2} sx={{ marginTop: "20px" }}>
          <StackRow text1="מספר חברים" text2="36" />
          <StackRow text1="כסף שנאסף" text2="2,740 שח" />
          <StackRow text1=" כסף שנרשם" text2="1,980 שח" />

          <TextField
            label="סוג משלוח"
            select
            value={size}
            fullWidth
            defaultValue={"ללא"}
            onChange={handleSizeChange}
          >
            <MenuItem value="ללא">
              <em>ללא</em>
            </MenuItem>
            <MenuItem value={10}>קטן</MenuItem>
            <MenuItem value={20}>גדול</MenuItem>
          </TextField>

          <TextField
            label="עמותה לתרומה"
            select
            value={amuta}
            fullWidth
            defaultValue={"ללא"}
            onChange={handleAmutaChange}
            onMouseDown={(e) => e.preventDefault()}
          >
            <MenuItem value="ללא">
              <em>ללא</em>
            </MenuItem>
            <MenuItem value={"משלוחמד"}>משלוחמד</MenuItem>
            <MenuItem value={"תנו לחיות לחיות"}>תנו לחיות לחיות</MenuItem>
          </TextField>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ width: "80%", marginTop: 9 }}
          >
            <Typography variant="h5">קישור לקהילה</Typography>
            <Image alt="logo" src={logo} width={70} />
          </Stack>
          <Button
            onClick={nevigateToMembersHandler}
            size="large"
            variant="contained"
            sx={{ alignItems: "center", marginBottom: "30px" }}
          >
            חברי הקהילה
          </Button>
        </Stack>
      )}
    </FormControl>
  );
};

export default Kehila;
