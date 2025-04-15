import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Box>
  )
}

export default App
