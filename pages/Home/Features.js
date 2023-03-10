import theme from "@/src/theme";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { db } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import { doc, getDocs, collection } from "firebase/firestore";

export default function Features() {
  const [designData, setDesignData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let querySnapshot = await getDocs(collection(db, "designs"));
      let designArr = [];
      querySnapshot.forEach((doc) => {
        designArr.push(doc.data());
      });
      setDesignData(designArr);
    };
    getData();
  }, []);

  return (
    <Box>
      {/* part One */}
      <Box sx={{ background: "linear-gradient(45deg, #ebeef2, #d6f2b1)" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "8rem",
              paddingBottom: "3rem",
            }}
          >
            <Typography
              sx={{
                color: "green",
                fontSize: "1rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Version 1.1
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.dark,
                fontSize: "3rem",
                marginBottom: "1.5rem",
              }}
            >
              Fresh new <i>features</i>, even more <i>power</i>.
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.dark, fontSize: "1.05rem" }}
            >
              The best-selling rising star continues to get better and better
              with Version 1.1.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: "8rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                height: "3rem",
                width: "14rem",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                marginRight: "2rem",
                position: "static",
                "&:hover": {
                  color: theme.palette.text.main,
                },
              }}
            >
              See the changelog
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: "3rem",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                width: "14rem",
                position: "static",
              }}
            >
              Test Vault for free
            </Button>
          </Box>
        </Container>
      </Box>
      {/* part Two */}
      <Box sx={{ backgroundColor: theme.palette.text.main }}>
        <Container>
          <div className={styles.gridContainer2}>
            <div className={styles.item6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: "2rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: "3rem",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Marquee Carousel
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.dark,
                      textAlign: "center",
                    }}
                  >
                    This option was added to the Custom Carousel Widget
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.text.light,
                    backgroundColor: theme.palette.primary.main,
                    marginTop: "1rem",
                    paddingX: "1rem",
                    textAlign: "center",
                  }}
                >
                  The future belongs to those who believe in the beauty of their
                  dreams.
                </Typography>
              </Card>
            </div>
            <div className={styles.item7}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: "4rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <Image width={100} height={100} src="/star.png" alt="star" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "3rem" }}>2 New Demos</Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.dark,
                      textAlign: "center",
                      paddingX: "3rem",
                      marginTop: "1rem",
                    }}
                  >
                    Brand new demos to help you build the perfect website:
                    Charity and Restaurant
                  </Typography>
                </Box>
                <Image
                  width={300}
                  height={300}
                  src="/styledLaptop.png"
                  alt="laptopStyled"
                />
              </Card>
            </div>
            <div className={styles.item8}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: "2rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: "3rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    New Theme Builder Widgets
                  </Typography>
                  <Typography
                    sx={{ color: theme.palette.text.dark, textAlign: "center" }}
                  >
                    Brand new widgets for blog archives and singles.
                  </Typography>
                </Box>
                <Image
                  width={250}
                  height={150}
                  src="/newspaper.png"
                  alt="newspaper"
                />
              </Card>
            </div>
            <div className={styles.item9}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: "2rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: "3rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    New Items in Template Library
                  </Typography>
                  <Typography
                    sx={{ color: theme.palette.text.dark, textAlign: "center" }}
                  >
                    Theme Builder now comes with ready-to-use templates.
                  </Typography>
                </Box>
                <Image
                  width={200}
                  height={200}
                  src="/folder.png"
                  alt="folder"
                />
              </Card>
            </div>
            <div className={styles.item10}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: "2rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <Image width={96} height={96} src="/code.png" alt="code" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: "3rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    Code Improvements
                  </Typography>
                  <Typography
                    sx={{ color: theme.palette.text.dark, textAlign: "center" }}
                  >
                    We’re constantly reviewing our codebase for performance
                    improvements.
                  </Typography>
                </Box>
              </Card>
            </div>
          </div>
          <Box sx={{ width: "40%", py: "8rem" }}>
            <Typography
              sx={{
                color: "green",
                fontSize: "0.85rem",
                fontWeight: "bold",
              }}
            >
              Ready-Made Templates
            </Typography>
            <Typography
              sx={{
                fontSize: "3rem",
                lineHeight: "3.5rem",
                marginBottom: "2rem",
                marginTop: "1.5rem",
                color: theme.palette.primary.main,
              }}
            >
              Beautiful designs, <i>Endless</i> possibilities.
            </Typography>
            <Typography sx={{ color: theme.palette.text.dark }}>
              Beautiful, hand-crafted designs to get you started. Install any
              demo or template with a single click. Mix and match anything.
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* part Three */}
      <Box sx={{ backgroundColor: theme.palette.text.main, paddingX: "3rem" }}>
        <Grid container spacing={3}>
          {designData.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              className={styles.itemsCenteredColumn}
            >
              <Card
                sx={{
                  backgroundColor: theme.palette.text.light,
                  width: "25rem",
                  height: "18rem",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                  },
                }}
              >
                <Image src={item.img} fill alt="software" />
              </Card>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: theme.palette.primary.light,
                  marginTop: "1rem",
                }}
              >
                {item.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Toolbar />
        <Toolbar />
        <Toolbar />
      </Box>
      {/* part Four */}
      <Box sx={{ backgroundColor: theme.palette.text.main }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "75%",
              }}
            >
              <Card
                sx={{
                  width: "17rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <CheckBoxIcon sx={{ color: "green", fontSize: "3rem" }} />
                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: "bold",
                    color: theme.palette.primary.dark,
                    marginBottom: "0.5rem",
                  }}
                >
                  One Click Demo Import
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: theme.palette.primary.light,
                  }}
                >
                  Import content as you see in the demo preview, including
                  images, menu items, posts, etc.
                </Typography>
              </Card>
              <Card
                sx={{
                  width: "17rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <TextFieldsIcon sx={{ color: "green", fontSize: "3rem" }} />
                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: "bold",
                    color: theme.palette.primary.dark,
                    marginBottom: "0.5rem",
                  }}
                >
                  Global Fonts & Colors
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: theme.palette.primary.light,
                  }}
                >
                  Using our Design System, you can quickly adapt any demo to
                  your branding guidelines.
                </Typography>
              </Card>
              <Card
                sx={{
                  width: "17rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  backgroundColor: theme.palette.text.light,
                }}
              >
                <RemoveRedEyeIcon sx={{ color: "green", fontSize: "3rem" }} />
                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: "bold",
                    color: theme.palette.primary.dark,
                    marginBottom: "0.5rem",
                  }}
                >
                  Selectively Import Content
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: theme.palette.primary.light,
                  }}
                >
                  Import just the content you need without overwriting your
                  existing pages or settings.
                </Typography>
              </Card>
            </Box>
          </Box>
        </Container>
        <Toolbar />
      </Box>
    </Box>
  );
}
