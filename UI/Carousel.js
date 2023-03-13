import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "@/src/theme";

export default function Carousel() {
  const [drag, setDrag] = useState(false);

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    // const prev = document.getElementById("prev");
    // const next = document.getElementById("next");
    let prevPageX, prevScrollLeft, positionDiff;

    const dragStart = (e) => {
      setDrag(true);
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    const dragStop = () => {
      setDrag(false);
    };

    const dragging = (e) => {
      if (!drag) return;
      e.preventDefault();
      positionDiff = e.pageX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
  }, [drag]);

  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  const [current, setCurrent] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const length = slides.length;

  const handlePrevious = () => {
    document.getElementById("carousel").style.transform = `translateX(${
      currentPos - 30
    }rem)`;
    setCurrentPos(currentPos === 0 ? currentPos + 40 : currentPos - 30);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNext = () => {
    document.getElementById("carousel").style.transform = `translateX(${
      currentPos + 30
    }rem)`;
    setCurrentPos(currentPos === currentPos + 40 ? currentPos - 40 : currentPos + 30);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container>
      <Box sx={{ position: "relative", width: "100%" }}>
        <ArrowBackIosIcon
          onClick={handlePrevious}
          id="prev"
          sx={{
            color: theme.palette.text.light,
            fontSize: "3rem",
            left: "1rem",
            position: "absolute",
            top: "15rem",
            zIndex: "100",
            // transform: "translateY(-50%)",
          }}
        />
        <ArrowForwardIosIcon
          onClick={handleNext}
          id="next"
          sx={{
            color: theme.palette.text.light,
            fontSize: "3rem",
            right: "1rem",
            position: "absolute",
            top: "15rem",
            zIndex: "100",
            // transform: "translateY(-50%)",
          }}
        />
      </Box>
      <div id="carousel" className={styles.scrollport}>
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={current === index ? styles.itemActive : styles.items}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "3rem",
                  color: theme.palette.text.light,
                }}
              >
                {slide}
              </Typography>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
