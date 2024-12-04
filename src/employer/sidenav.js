import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";

const CustomDrawer = styled(({ isExpanded, ...other }) => <Drawer {...other} />)(
  ({ isExpanded }) => ({
    "& .MuiDrawer-paper": {
      position:'static',  
      width: isExpanded ? "240px" : "70px",
      transition: "width 0.4s ease",
      overflowX: "hidden",
      borderRight: "1px solid #e0e0e0",
      backgroundColor: "#fff",
      height:'100vh'
    },
  })
);

const StyledListItemText = styled(({ isExpanded, ...other }) => (
  <ListItemText {...other} />
))(({ isExpanded }) => ({
  opacity: isExpanded ? 1 : 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  transform: isExpanded ? "translateX(0)" : "translateX(-10px)",
}));

const SideNav = ({ isExpanded, toggleSideNav }) => {
  const menuItems = [
    { text: "Jobs", icon: <HomeIcon /> },
    { text: "Database", icon: <InfoIcon /> },
    { text: "Reports", icon: <ContactMailIcon /> },
    { text: "Credits & Usage", icon: <SettingsIcon /> },
    { text: "Contact Sales", icon: <SettingsIcon /> },
  ];

  return (
    <CustomDrawer anchor="left" open={true} isExpanded={isExpanded} variant="persistent">
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <StyledListItemText primary={item.text} isExpanded={isExpanded} />
          </ListItem>
        ))}
      </List>
    </CustomDrawer>
  );
};

export default SideNav;
