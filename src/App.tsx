import "./App.css";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header, Sidebar } from "@/components";
import { SIDEBAR_WIDTH } from "@/lib/constants";
import { useCallback, useState } from "react";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(true);

  const toggleSidebar = useCallback((open?: boolean) => {
    if (open !== undefined) {
      setSidebarIsOpen(open);
    } else {
      setSidebarIsOpen((prevState) => !prevState);
    }
  }, []);

  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <Box
        sx={{
          marginLeft: `${SIDEBAR_WIDTH}px`,
          flexGrow: 1,
        }}
      >
        <Header sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
        <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
