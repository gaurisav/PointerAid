import React from "react";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CalculateIcon from "@mui/icons-material/Calculate";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";

import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const drawerWidth = 240;

const menuItems = [
  {
    text: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    text: "Forecast",
    path: "/forecast",
    icon: <CalculateIcon />,
  },
  {
    text: "Analytics",
    path: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    text: "Planner",
    path: "/planner",
    icon: <EventNoteIcon />,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

function Sidebar() {
    return (
        <Drawer
            variant = "permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                },
            }}
        >
            <Box>
                <Toolbar>
                    <Typography
                        variant="h5"
                        color="primary"
                        fontWeight={700}
                    >
                        PointerAid
                    </Typography>
                </Toolbar>

                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                sx={{
                                    "&.active": {
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        borderRadius: 2,

                                        "& .MuiListItemIcon-root": {
                                            color: "white",
                                        },
                                    },

                                    mx: 1,
                                    my: 0.5,
                                }}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>

                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidebar;