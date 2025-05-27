"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon, Church } from "@mui/icons-material";

export function Header() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", color: "primary.main" }}>
      <Toolbar>
        <Church sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          Igreja AD Capão - CADCAF
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
