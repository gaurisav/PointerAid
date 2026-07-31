import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

function Navbar() {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PointerAid
          </Typography>
          <Avatar alt="User" src="" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;