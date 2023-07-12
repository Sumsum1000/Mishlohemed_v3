"use client";
// import {
//   BasicBtn,
//   PageContainer,
//   ButtonContainer,
//   StackRow,
// } from "@/Components/shared/Shared";
import { Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { nanoid } from "nanoid";
import Image from "next/image";
import logo from "../../Graphics/Logo2.png";

const numOfItems = 2;
const amutot = [
  "ניצב רפאל",
  "עמותה2",
  "עמותה3",
  "עמותה4",
  "עמותה5",
  "עמותה6",
  "עמותה7",
];
const kehilot = [
  "מושב חמד",
  "קהילה",
  "עבודה",
  "חדר כושר",
  "קהילה5",
  "קהילה6",
  ,
  "קהילה7",
  "קהילה8",
  "קהילה9",
];
const Welcome = () => {
  const router = useRouter();
  const [amutotCrousel, setAmutotCarousel] = useState([]);
  const [kehilotCarousel, setKehilotCarousel] = useState([]);

  const clickRegisterHandler = () => {
    router.push("/register");
  };

  const clickLoginHandler = () => {
    router.push("/login");
  };

  useEffect(() => {
    // set Amutot for carousel
    const amutotTemp = [];
    for (let i = 0; i < amutot.length; i + numOfItems) {
      const temp = amutot.splice(i, i + numOfItems);
      amutotTemp.push(temp);
      setAmutotCarousel(amutotTemp);
    }

    // set Kehilot for carousel
    const kehilotTemp = [];
    for (let i = 0; i < kehilot.length; i + numOfItems) {
      const temp = kehilot.splice(i, i + numOfItems);
      kehilotTemp.push(temp);
      setKehilotCarousel(kehilotTemp);
    }
  }, []);

  return (
    <Stack
      direction="column"
      sx={{
        height: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Stack sx={{ alignItems: "center", marginBottom: "30px" }}>
        <Typography variant="h3">ברוכים הבאים</Typography>
        <Typography variant="h5">להתחבר - לתרום - לעזור</Typography>
      </Stack>
      <Typography variant="h5">
        הפעילות שלנו
        <br /> גיוס חברתי לטובת משפחות ובודדים המטופלים ברווחה עבור מגוון צרכים
        מהותיים והכרחיים.
      </Typography>
      <Stack
        direction="row"
        sx={{ width: "100%", alignItems: "space-around", padding: "30px 0" }}
      >
        <Button
          size="large"
          variant="contained"
          onClick={clickLoginHandler}
          sx={{ flex: "1" }}
        >
          התחבר
        </Button>
        <Button
          size="large"
          variant="contained"
          onClick={clickRegisterHandler}
          sx={{ flex: "1" }}
        >
          צור חשבון
        </Button>
      </Stack>

      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography textAlign={"center"}>העמותות שלנו</Typography>
        <Carousel
          fullwidth
          // next={(next, active) =>
          //   console.log(`we left ${active}, and are now at ${next}`)
          // }
          // prev={(prev, active) =>
          //   console.log(`we left ${active}, and are now at ${prev}`)
          // }
          // next={(next, active) =>
          //   console.log(`we left ${active}, and are now at ${next}`)
          // }
          // prev={(prev, active) =>
          //   console.log(`we left ${active}, and are now at ${prev}`)
          // }
        >
          {amutot.map((item, i) => (
            <h2 key={nanoid()}>{item}</h2>
          ))}
        </Carousel>
      </Stack>

      <Stack
        sx={{
          width: "100%",
        }}
      >
        <Typography textAlign={"center"}>הקהילות שלנו</Typography>
        <Carousel
        // next={(next, active) =>
        //   console.log(`we left ${active}, and are now at ${next}`)
        // }
        // prev={(prev, active) =>
        //   console.log(`we left ${active}, and are now at ${prev}`)
        // }
        // next={(next, active) =>
        //   console.log(`we left ${active}, and are now at ${next}`)
        // }
        // prev={(prev, active) =>
        //   console.log(`we left ${active}, and are now at ${prev}`)
        // }
        >
          {kehilot.map((item, i) => (
            <h2 key={nanoid()}>{item}</h2>
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
};
export default Welcome;
