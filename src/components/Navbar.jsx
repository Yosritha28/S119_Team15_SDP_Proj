import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, Typography, Box, Select, FormControl } from "@mui/material";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const [homeAnchor, setHomeAnchor] = useState(null);
  const openHome = Boolean(homeAnchor);

  const { user, setRole, setShowAuth } = useContext(UserContext);

  // Role Dropdown
  const roleList = [
    "Cultural Enthusiast", "Content Creator", "Tour Guide", "Admin"
  ];

  // Dummy admin logic; adapt to your logic
  const isAdmin = user?.role === "Admin";
  const isLoggedIn = !!user;

  const handleHomeMenuClick = (sectionId) => {
    setHomeAnchor(null);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar position="sticky" style={{ background: "#E17000", zIndex: 10 }}>
      <Toolbar>
        {/* Logo */}
        <img src="/assets/logo.png" alt="Logo" style={{ height: 40, marginRight: 12 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 2 }}>
          Indian Heritage Portal
        </Typography>
        {/* Home Dropdown */}
        <Button
          color="inherit"
          onClick={e => setHomeAnchor(e.currentTarget)}
          aria-controls={openHome ? "home-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openHome ? "true" : undefined}
          sx={{ fontWeight: "bold", fontSize: "1.07rem" }}
        >
          Home
        </Button>
        <Menu
          id="home-menu"
          anchorEl={homeAnchor}
          open={openHome}
          onClose={() => setHomeAnchor(null)}
        >
          <MenuItem onClick={() => handleHomeMenuClick("home")}>Home Intro</MenuItem>
          <MenuItem onClick={() => handleHomeMenuClick("explore")}>Explore</MenuItem>
          <MenuItem onClick={() => handleHomeMenuClick("gallery")}>Gallery</MenuItem>
          <MenuItem onClick={() => handleHomeMenuClick("virtualtours")}>Virtual Tours</MenuItem>
          <MenuItem onClick={() => handleHomeMenuClick("board")}>Board</MenuItem>
        </Menu>

        {/* User Role as Padded Dropdown */}
        {isLoggedIn && (
          <FormControl sx={{ minWidth: 165, mx: 2, bgcolor: "#fffbe6", borderRadius:2 }}>
            <Select
              value={user.role || ""}
              onChange={e => setRole(e.target.value)}
              sx={{
                p: 1.5,
                fontWeight:"bold",
                border: "2px solid #E17000",
                color: "#E17000"
              }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              {roleList.map(role => (
                <MenuItem value={role} key={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {/* Profile */}
        {isLoggedIn &&
          <Button color="inherit" sx={{ fontWeight: "bold", mx: 1 }} href="/profile">
            Profile
          </Button>
        }
        
        {/* Login/Signup */}
        {!isLoggedIn && (
          <Box>
            <Button color="inherit" sx={{ fontWeight: "bold", mx: 1 }} onClick={() => setShowAuth(true)}>
              Login
            </Button>
            <Button variant="outlined" sx={{
              border: "2px solid #fff",
              color: "#fff",
              background: "#E17000",
              mx: 1
            }} onClick={() => setShowAuth(true)}>
              Signup
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
