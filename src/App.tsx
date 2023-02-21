import { Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { productDetailsAtom } from "./app/stateToggles.atom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import MobileNav from "./Components/MobileNav";
import ModalBox from "./Components/Modal";
import Navbar from "./Components/Navbar";

export const App = () => {
  const { show } = useRecoilValue(productDetailsAtom);
  return (
    <Box bg="white">
      <Navbar />
      <Header />
      <Main />
      <Footer />
      <MobileNav />
      {show && <ModalBox />}
    </Box>
  );
};
