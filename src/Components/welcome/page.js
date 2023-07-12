"use client";
import {
  BasicBtn,
  PageContainer,
  ButtonContainer,
} from "@/Components/shared/Shared";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Carousel from "react-material-ui-carousel";
import { nanoid } from "nanoid";

const amutot = ["ניצב רפאל", "עמותה2", "עמותה3"];
const kehilot = ["מושב חמד", "קהילה", "קהילה3"];

const Welcome = () => {
  const router = useRouter();

  const clickRegisterHandler = () => {
    router.push("/register");
  };

  const clickLoginHandler = () => {
    router.push("/login");
  };

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
        }}
      >
        <Typography>העמותות שלנו</Typography>
        <Carousel
          fullwidth
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
        <Typography>הקהילות שלנו</Typography>
        <Carousel
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
