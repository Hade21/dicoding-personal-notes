import React from "react";

//styling
import { TextField, Typography } from "@mui/material";

const Header = ({ onSearch }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: "2px solid black",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "700" }}>
        Notes
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        name="search"
        id="search"
        label="Cari catatan"
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
