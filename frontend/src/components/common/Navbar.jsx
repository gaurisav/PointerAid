import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Logo from "./Logo";
import { ColorModeContext } from "../../context/ThemeContext";

function Navbar() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>

          <>
            <IconButton onClick={toggleColorMode}>
              {mode === "light" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>

            <Avatar>G</Avatar>
          </>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
