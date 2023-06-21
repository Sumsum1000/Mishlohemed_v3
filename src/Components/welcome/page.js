"use client";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
  StackRow,
} from "@/Components/shared/Shared";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Card,
  Grid,
  SubCategory,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

const amutot = ["ניצב רפאל", "עמותה2", "עמותה3", "עמותה4", "עמותה5"];
const kehilot = ["מושב חמד", "קהילה", "קהילה3", "קהילה4", "קהילה5", "קהילה6"];

const Welcome = () => {
  const router = useRouter();
  const [amutotCrousel, setAmutotCarousel] = useState([]);

  const clickRegisterHandler = () => {
    router.push("/register");
  };

  const clickLoginHandler = () => {
    router.push("/login");
  };

  useEffect(() => {
    const rootTemp = [];
    for (let i = 0; i < amutot.length; i + 2) {
      const temp = amutot.splice(i, i + 2);
      rootTemp.push(temp);
      setAmutotCarousel(rootTemp);
    }
  }, []);

  useEffect(() => {
    console.log("loglog", amutotCrousel);
  }, [amutotCrousel]);

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
      <Stack sx={{ alignItems: "center" }}>
        <Typography variant="h3">ברוכים הבאים</Typography>
        <Typography variant="h5">להתחבר - לתרום - לעזור</Typography>
      </Stack>
      <Typography variant="h5">
        הפעילות שלנו
        <br /> גיוס חברתי לטובת משפחות ובודדים המטופלים ברווחה עבור מגוון צרכים
        מהותיים והכרחיים.
      </Typography>
      <Stack direction="row" sx={{ width: "100%", alignItems: "space-around" }}>
        <Button
          fullwidth
          size="large"
          variant="contained"
          onClick={clickLoginHandler}
          sx={{ flex: "1" }}
        >
          התחבר
        </Button>
        <Button
          fullwidth
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
        >
          {/* {amutot.map((item, i) => (
            <h2>{item}</h2>
          ))} */}
          {amutotCrousel.map((item) => {
            return (
              <Stack
                direction={"row"}
                sx={{
                  justifyContent: "center",
                  gap: "50px",
                }}
              >
                <h2>{item[0]}</h2>
                <h2>{item[1]}</h2>
              </Stack>
            );
          })}
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
        >
          {kehilot.map((item, i) => (
            <h2>{item}</h2>
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
};
export default Welcome;
