import { Accordion, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navbarMenuAtom } from '../app/navbar.atom';
import { mobileNavAtom } from '../app/stateToggles.atom';
import logo from "../Images/logo_header.svg";
import MobilNavItem from './MobilNavItem';

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNav, setShowMobileNav] = useRecoilState(mobileNavAtom);
  const navList = useRecoilValue(navbarMenuAtom);
  const close = () => {
    setShowMobileNav(prev => !prev);
    onClose();
  };

  useEffect(() => {
    if (showNav) onOpen();
  }, [showNav, onOpen]);

  return (
    <>
      <Drawer placement="bottom" onClose={close} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" h="90vh" zIndex={20}>
          <DrawerHeader as={Flex} borderBottomWidth='1px' alignItems="center" justify="space-between" py={6} px={5}>
            <Image src={logo} alt="SendChamp logo" cursor="pointer" my="auto" w="150px" maxW="157px" />
            <DrawerCloseButton position="unset" fontSize="lg" />
          </DrawerHeader>
          <DrawerBody p={0}>
            <Accordion allowToggle>
              {navList.map((nav, i) => (
                <MobilNavItem key={i} {...nav} />
              ))}
            </Accordion>
          </DrawerBody>
          <DrawerFooter as={Flex} direction="column" alignItems="center" px={5} mt="auto" mb={5} gap={4}>
            <Button w="100%" colorScheme="gray" size="lg" variant="outline" fontSize={{ base: "sm", md: "md" }} color="black.600" borderColor="black.600">Login</Button>
            <Button w="100%" colorScheme="messenger" size="lg" bg="brand.main" fontSize={{ base: "sm", md: "md" }}>Get Started</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {showNav && <Box position="fixed" top={0} left={0} w="100vw" h="100vh" bg="rgba(0,0,0,0.5)" zIndex={10}></Box>}
    </>
  );
};

export default MobileNav;