import React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemText from '@mui/material/ListItemText';
import { styled } from "@mui/material/styles";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
        position: "static",
        height: "calc(100vh - 60px)",
        width: "240px", 
        borderRight: "1px solid #e0e0e0",
        backgroundColor: "#fff",
    },
}));

const sideNav = ({ isOpen, toggleSideNav }) => {

    const menuItems = [
        { text: "Jobs", icon: <HomeIcon /> },
        { text: "Database", icon: <InfoIcon /> },
        { text: "Reports", icon: <ContactMailIcon /> },
        { text: "Credits & Usage", icon: <SettingsIcon /> },
        { text: "Contact Sales", icon: <SettingsIcon /> },
    ];

    const handleToggle = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        toggleSideNav(open);
    };

    return(
        <CustomDrawer anchor="left" open={isOpen} onClose={handleToggle(false)}  variant="permanent"
       >
         <List>
                {menuItems.map((item, index) => (
                    <ListItem
                        button
                        key={item.text}
                        className={index === 0 ? "active" : ""}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        {/* <List>
          {['Jobs', 'Database', 'Reports', 'Credits & Usage','Contact Sales'].map((text, index) => (
            <ListItem key={index} className={index === 0 ? "active" : ""}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </CustomDrawer>
    )
}

export default sideNav;