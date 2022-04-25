import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Navbar = function Navindex() {
  return (
    <>
      {/* Base background color */}
      <CssBaseline />
      <Container maxWidth="fixed">
        <Box sx={{ bgcolor: "#FCE373", height: "100vh" }} />
      </Container>
    </>
  );
};

export default Navbar;
