"use client";
import Kehila from "@/Components/kehila/Kehila";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import { userStore } from "@/Components/store/userStore";
import Welcome from "@/Components/welcome/page";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  addKehila,
  addManager,
  raedKAllKehilotByManager,
  readAllManagers,
  readManager,
} from "@/Components/_Firebase/Utils";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Manager = () => {
  const router = useRouter();
  const { user } = userStore();
  const [kehilot, setKehilot] = useState([]);
  const [temp, setTemp] = useState([]);

  const createKehilaHandler = () => {
    //addKehila("Manager 2", "BlaBla");
    router.push("/create-kehila");
    //readManager();
    //readAllManagers();
    //raedKAllKehilotByManager();
  };

  useEffect(() => {
    const k = raedKAllKehilotByManager().then((data) => setKehilot(data));
    //setKehilot(k);
  }, []);

  useEffect(() => {
    console.log("Kehilot :: ", kehilot);
  }, [kehilot]);

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
          ברוכים הבאים {user.name}
        </Typography>
      </Stack>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Typography>הקהילות שלי</Typography>

        {kehilot.map((kehila) => {
          console.log("Kehila: ", kehila);
          return (
            <Kehila
              key={nanoid()}
              name={kehila.name}
              numOfMembers={kehila.numOfMembers}
              collectedMoney={kehila.collectedMoney}
              registeredMoney={kehila.registeredMoney}
            />
          );
        })}

        {/* <Kehila name={"מושב חמד"} />
        <Box sx={{ border: "1px solid black" }} />
        <Kehila name={"עבודה"} />
        <Box sx={{ border: "1px solid black" }} />
        <Kehila name={"חדר כושר"} />
        <Box sx={{ border: "1px solid black" }} /> */}
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
