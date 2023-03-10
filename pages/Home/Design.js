import theme from "@/src/theme";
import Carousel from "@/UI/Carousel";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Design() {
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      {/* First Part */}
      <Container>
        <Box
          sx={{
            position: "relative",
            background: "url(/4k_portrait1.jpg)",
            height: "3000px",
            backgroundPosition: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: theme.palette.text.light,
              position: "sticky",
              top: 0,
              paddingTop: "10rem",
              textAlign: "center",
            }}
          >
            UiCore Template Library.
            <br />
            The ultimate blocks collection.
          </Typography>
        </Box>
      </Container>
      {/* Second Part */}
      <Container>
        <Box
          sx={{
            position: "relative",
            height: "3000px",
            background: "url(/gradient.webp)",
            backgroundPosition: "center",
            color: theme.palette.text.main,
          }}
        >
          <Typography
            component="p"
            sx={{
              background: "rgba(100,100,100,0.5)",
              paddingTop: "10rem",
              textAlign: "center",
              position: "sticky",
              top: 0,
              backgroundClip: "text",
              color: "transparent",
              fontSize: "4rem",
            }}
          >
            Powered by UiCore
            <br /> Framework v.4.0. <br />
            Brand new features,
            <br /> even more power.
          </Typography>
        </Box>
      </Container>
      {/* Third Part */}
      <Carousel/>
    </Box>
  );
}
