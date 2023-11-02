import "./App.css";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header, Sidebar } from "@/components";
import { SIDEBAR_WIDTH } from "@/lib/constants.ts";

function App() {
  return (
    <Box display="flex" gap={3}>
      <Sidebar />
      <Box
        sx={{
          marginLeft: `${SIDEBAR_WIDTH}px`,
        }}
      >
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
