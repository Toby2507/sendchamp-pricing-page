import { Button, Flex, Icon, Image, List, ListItem, Show, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navbarMenuAtom } from "../app/navbar.atom";
import { mobileNavAtom } from "../app/stateToggles.atom";
import logo from "../Images/logo_header.svg";
import NavItem from "./NavItem";

const Navbar = () => {
  const navItems = useRecoilValue(navbarMenuAtom);
  const setShowMobileNav = useSetRecoilState(mobileNavAtom);
  const toggleNav = () => setShowMobileNav(prev => !prev);
  return (
    <Flex as="nav" pos="sticky" zIndex={2} top="0px" bg="gray.5" py={6} px={{ base: 8, md: 24 }} gap={10} alignItems="center" justify="space-between">
      <Image src={logo} alt="SendChamp logo" cursor="pointer" my="auto" maxW="157px" />
      <Show above="md">
        <List as={Flex} my="auto" gap={8}>
          {navItems.map((item, i) => (
            <ListItem key={i}><NavItem {...item} /></ListItem>
          ))}
        </List>
        <Flex alignItems="center" gap={3}>
          <Text cursor="pointer">Login</Text>
          <Button colorScheme="messenger" size="lg" bg="brand.main" fontSize={{ base: "sm", md: "md" }} cursor="pointer">Get Started</Button>
          <Text cursor="pointer">NG</Text>
        </Flex>
      </Show>
      <Show below="md">
        <Icon as={GiHamburgerMenu} w="1.5rem" h="1.5rem" onClick={toggleNav} />
      </Show>
    </Flex>
  );
};

export default Navbar;