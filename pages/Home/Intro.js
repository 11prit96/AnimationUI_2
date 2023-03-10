import theme from "@/src/theme";
import { Box, Card, Container, Grid, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function Intro() {
  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.dark }}>
      <Container>
        {/* first part */}

        <Box
          sx={{
            backgroundColor: theme.palette.primary.dark,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10rem",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography
              sx={{
                fontSize: "4rem",
                textAlign: "center",
                marginBottom: "1.5rem",
                color: theme.palette.text.light,
              }}
            >
              Build <i>next</i>-generation websites like never before
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "4rem",
                color: theme.palette.text.dark,
              }}
            >
              Whether you need a landing page or a full-fledged website for your
              business, Vault will get your website up and running in minutes.
              Without compromising on quality.
            </Typography>
          </Box>
          <video
            style={{ width: "100%", height: "40%", borderRadius: "2rem" }}
            controls
            autoPlay
            loop
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </Box>

        {/* second part */}

        <Box sx={{ width: "40%", my: "9rem" }}>
          <Typography
            sx={{
              color: theme.palette.secondary.light,
              fontSize: "0.85rem",
              fontWeight: "bold",
            }}
          >
            UiCore Framework
          </Typography>
          <Typography
            sx={{
              fontSize: "3rem",
              lineHeight: "3.5rem",
              marginBottom: "2rem",
              marginTop: "1.5rem",
              color: theme.palette.text.light,
            }}
          >
            One framework for all your website needs.
          </Typography>
          <Typography sx={{ color: theme.palette.text.dark }}>
            Use Vault’s interactive design tools and its many customization
            options to customize anything and everything needed to build the
            fully-functional website of your dreams.
          </Typography>
        </Box>

        {/* third part */}

        <div className={styles.gridContainer1}>
          <div className={styles.item1}>
            <Card
              sx={{
                backgroundColor: theme.palette.primary.light,
                padding: "3rem",
                borderRadius: "20px",
                backgroundImage: `url(/web.png)`,
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
              }}
              id="abc"
            >
              <Box sx={{ width: "27%" }}>
                <Typography
                  sx={{
                    color: theme.palette.text.main,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Huge Design Collection
                </Typography>
                <Typography sx={{ color: theme.palette.text.dark }}>
                  Build a clean website to get an online presence and landing
                  pages to attract more customers.
                </Typography>
                <Toolbar />
                <Toolbar />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: "bold",
                        fontSize: "1.7rem",
                      }}
                    >
                      50+
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.dark }}>
                      {" "}
                      Websites
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: "bold",
                        fontSize: "1.7rem",
                      }}
                    >
                      800+
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.dark }}>
                      {" "}
                      Blocks
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: "bold",
                        fontSize: "1.7rem",
                      }}
                    >
                      200+
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.dark }}>
                      {" "}
                      Widgets
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </div>
          <div className={styles.item2}>
            <Card
              sx={{
                backgroundColor: theme.palette.primary.light,
                padding: "3rem",
                borderRadius: "20px",
              }}
              id="xyz"
            >
              <Image
                width={500}
                height={250}
                style={{ backgroundSize: "cover", marginBottom: "1rem" }}
                src="/design.png"
                alt="design"
              />
              <Typography
                sx={{
                  color: theme.palette.text.main,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Theme Builder
              </Typography>
              <Typography sx={{ color: theme.palette.text.dark }}>
                With the Theme Builder, you have complete control over the
                static elements of your website, and because you can include or
                exclude templates on any page or post, there is really no longer
                any need to manually edit a theme file ever again.
              </Typography>
            </Card>
          </div>
          <div className={styles.item3}>
            <Card
              sx={{
                backgroundColor: theme.palette.primary.light,
                padding: "3rem",
                borderRadius: "20px",
              }}
              id="xyz"
            >
              <Image
                width={200}
                height={100}
                style={{ backgroundSize: "cover", marginBottom: "1rem" }}
                src="/speed.png"
                alt="speed"
              />
              <Typography
                sx={{
                  color: theme.palette.text.main,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Outstanding Performance
              </Typography>
              <Typography sx={{ color: theme.palette.text.dark }}>
                Analyze and manage your website features and make better
                performance-related decisions, all in one panel, with no extra
                plugins to think about.
              </Typography>
            </Card>
          </div>
          <div className={styles.item4}>
            <Card
              sx={{
                backgroundColor: theme.palette.primary.light,
                padding: "3rem",
                borderRadius: "20px",
              }}
              id="xyz"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Image
                  width={50}
                  height={50}
                  style={{
                    backgroundSize: "cover",
                  }}
                  src="/cubeDefault.png"
                  alt="cubeDefault"
                />
                <Image
                  width={50}
                  height={50}
                  style={{
                    backgroundSize: "cover",
                  }}
                  src="/cubeBlack.png"
                  alt="cubeBlack"
                />
                <Image
                  width={50}
                  height={50}
                  style={{ backgroundSize: "cover" }}
                  src="/cubeGreen.png"
                  alt="cubeGreen"
                />
              </Box>
              <Typography
                sx={{
                  color: theme.palette.text.main,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Only 3 Plugins Needed
              </Typography>
              <Typography sx={{ color: theme.palette.text.dark }}>
                UiCore Framework (theme core functionalities), Elementor (free
                page builder), and Element Pack Pro (premium plugin, included
                for free).
              </Typography>
            </Card>
          </div>
          <div className={styles.item5}>
            <Card
              sx={{
                backgroundColor: theme.palette.primary.light,
                paddingX: "3rem",
                borderRadius: "20px",
              }}
              id="xyz"
            >
              <Typography
                sx={{
                  color: theme.palette.text.main,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginY: "1rem",
                }}
              >
                Next-Gen Theme Options
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.dark, marginBottom: "1rem" }}
              >
                Don’t know how to code? No problem. Our themes comes with
                interactive design tools and features that could leave you
                feeling like a pro after just a few clicks.
              </Typography>
              <Image
                width={400}
                height={300}
                style={{ backgroundSize: "cover" }}
                src="/laptop.png"
                alt="laptop"
              />
            </Card>
          </div>
        </div>
        <Toolbar />
        <Toolbar />
      </Container>
    </Box>
  );
}
