import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";

export const App = () => {
  return (
    <Box bg="white">
      <Navbar />
      <Header />
      <Main />
      <Footer />
      <MobileNav />
    </Box>
  );
};
