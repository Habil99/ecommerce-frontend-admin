import "./App.css";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header, Sidebar } from "@/components";
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
    <Box display="flex" height="100vh">
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <Box display="flex" maxWidth="100%" flexGrow={1} flexDirection="column">
        <Header sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
        <Box sx={{ paddingTop: 4, paddingX: 3, flex: 1, overflowY: "auto" }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
