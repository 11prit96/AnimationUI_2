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

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 10",
    "Slide 11",
  ];
  const [current, setCurrent] = useState(0);
  const length = 11;

  const handlePrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container>
      <div id="carousel" className={styles.scrollport}>
        <ArrowBackIosIcon
          onClick={handlePrevious}
          id="prev"
          sx={{
            color: theme.palette.text.light,
            fontSize: "3rem",
            left: "1rem",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
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
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
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
