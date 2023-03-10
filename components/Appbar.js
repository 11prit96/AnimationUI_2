import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Superscript } from "@mui/icons-material";
import BasicMenu from "@/UI/Menu";
import theme from "@/src/theme";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const drawerWidth = 240;
const navItems = [
  {
    name: "Features",
    menuItems: ["Page Builder", "Theme Builder", "Popup Builder"],
  },
  {
    name: "Blog",
    menuItems: ["Classic Layout", "Grid Layout", "Masonry Layout"],
  },
  {
    name: "Portfolio",
    menuItems: [
      "Portfolio-Grid Tiles",
      "Portfolio-Justify Tiles",
      "Portfolio-Masonry Tiles",
    ],
  },
  {
    name: "Shop",
    menuItems: ["Cart", "Shop Page", "My Account"],
  },
];

function DrawerAppBar(props) {
  useEffect(() => {
    let nav = document.getElementById("navbar");
    let scrollBefore = 0;
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY;

      if (scrollBefore > scrolled) {
        setShowNav(true);
        // console.log("scrollUp");
        scrollBefore = scrolled;
      } else {
        scrollBefore = scrolled;
        // console.log("scrollDown");
        setShowNav(false);
      }
    });
  }, []);

  const [showNav, setShowNav] = React.useState(true);

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <sup>*</sup>vault
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className={showNav ? styles.scrollUp : styles.scrollDown}
        component="nav"
        position="fixed"
        id="navbar"
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            color: theme.palette.text.main,
          }}
        >
          <sup style={{ color: theme.palette.secondary.main }}>*</sup>vault
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "30rem",
          }}
        >
          {navItems.map((item, index) => (
            <BasicMenu key={index} name={item.name} menuItem={item.menuItems} />
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.light,
            textTransform: "none",
            fontWeight: "bold",
            position: "static",
            "&:hover": {
              color: theme.palette.text.main,
            },
          }}
        >
          Purchase Now
        </Button>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
